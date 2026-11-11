import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import {
  GitBranch,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Flame,
  Sparkles,
  Award,
  ChevronRight,
  Filter,
  Move,
  RotateCcw,
  Hand
} from 'lucide-react';
import { QuestNode, QuestCategory } from '../types/quest';

interface FlowchartCanvasProps {
  quests: QuestNode[];
  completedQuestIds: string[];
  selectedChoiceIds: Record<string, string>;
  onSelectQuest: (quest: QuestNode) => void;
  onToggleQuestCompleted: (questId: string) => void;
  searchQuery: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  all: '全部任務節點',
  main_act1: '序章與第 1 幕',
  act2_arasaka: '荒坂與竹村線',
  act2_judy: '茱蒂與超夢線',
  act2_panam: '帕娜與流浪者線',
  act2_voodoo: '巫毒幫與奧特線',
  phantom_liberty: '自由幻局 DLC',
  act3_endings: '第 3 幕與大結局',
  hidden_secrets: '八大隱藏秘密任務'
};

export const FlowchartCanvas: React.FC<FlowchartCanvasProps> = ({
  quests,
  completedQuestIds,
  selectedChoiceIds,
  onSelectQuest,
  onToggleQuestCompleted,
  searchQuery,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 40, y: 30 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    mouseX: number;
    mouseY: number;
    panX: number;
    panY: number;
    hasMoved: boolean;
  }>({
    mouseX: 0,
    mouseY: 0,
    panX: 40,
    panY: 30,
    hasMoved: false,
  });

  // Filter quests based on search query and category
  const filteredQuests = useMemo(() => {
    return quests.filter((q) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query) || q.titleEn.toLowerCase().includes(query);
        const matchesNpc = q.associatedNpc?.toLowerCase().includes(query);
        const matchesRewards = q.iconicGear?.some(g => g.toLowerCase().includes(query)) || q.keyRewards?.some(r => r.toLowerCase().includes(query));
        if (!matchesTitle && !matchesNpc && !matchesRewards) return false;
      }

      // Category filter
      if (activeCategory === 'all') return true;
      if (activeCategory === 'main_act1') return q.category === 'prologue' || q.category === 'act1';
      if (activeCategory === 'phantom_liberty') return q.category === 'phantom_liberty';
      if (activeCategory === 'act3_endings') return q.category === 'act3_endings';
      if (activeCategory === 'hidden_secrets') return q.category === 'hidden_secrets';
      return q.category === activeCategory;
    });
  }, [quests, searchQuery, activeCategory]);

  const handleZoomIn = () => setScale((s) => Math.min(Number((s + 0.15).toFixed(2)), 2.0));
  const handleZoomOut = () => setScale((s) => Math.max(Number((s - 0.15).toFixed(2)), 0.4));
  const handleResetView = () => {
    setScale(1);
    setPan({ x: 40, y: 30 });
  };

  // Node coordinates on grid
  const NODE_WIDTH = 230;
  const NODE_HEIGHT = 125;
  const COL_GAP = 280;
  const ROW_GAP = 160;
  const PADDING_X = 50;
  const PADDING_Y = 50;

  // Mouse pan event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only drag on left mouse click
    if (e.button !== 0) return;

    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      panX: pan.x,
      panY: pan.y,
      hasMoved: false,
    };
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.mouseX;
    const deltaY = e.clientY - dragStartRef.current.mouseY;

    if (Math.hypot(deltaX, deltaY) > 4) {
      dragStartRef.current.hasMoved = true;
    }

    setPan({
      x: dragStartRef.current.panX + deltaX,
      y: dragStartRef.current.panY + deltaY,
    });
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom / pan
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      // Zoom with ctrl+wheel
      e.preventDefault();
      const zoomDelta = e.deltaY < 0 ? 0.08 : -0.08;
      setScale((s) => Math.min(Math.max(Number((s + zoomDelta).toFixed(2)), 0.4), 2.0));
    } else {
      // Normal wheel pans canvas
      setPan((prev) => ({
        x: prev.x - e.deltaX * 0.8,
        y: prev.y - e.deltaY * 0.8,
      }));
    }
  };

  // Touch pan event handlers for tablets / touchpads
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartRef.current = {
        mouseX: touch.clientX,
        mouseY: touch.clientY,
        panX: pan.x,
        panY: pan.y,
        hasMoved: false,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartRef.current.mouseX;
    const deltaY = touch.clientY - dragStartRef.current.mouseY;

    if (Math.hypot(deltaX, deltaY) > 4) {
      dragStartRef.current.hasMoved = true;
    }

    setPan({
      x: dragStartRef.current.panX + deltaX,
      y: dragStartRef.current.panY + deltaY,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Prevent drag movement from erroneously opening a quest
  const handleNodeClick = (quest: QuestNode) => {
    if (dragStartRef.current.hasMoved) return;
    onSelectQuest(quest);
  };

  // Render SVG connecting lines between prerequisites and targets
  const connectionLines = useMemo(() => {
    const lines: React.ReactElement[] = [];

    quests.forEach((targetQuest) => {
      targetQuest.prerequisites.forEach((prereqId) => {
        const sourceQuest = quests.find((q) => q.id === prereqId);
        if (!sourceQuest) return;

        // Coordinates
        const x1 = PADDING_X + sourceQuest.gridPos.column * COL_GAP + NODE_WIDTH;
        const y1 = PADDING_Y + sourceQuest.gridPos.row * ROW_GAP + NODE_HEIGHT / 2;
        const x2 = PADDING_X + targetQuest.gridPos.column * COL_GAP;
        const y2 = PADDING_Y + targetQuest.gridPos.row * ROW_GAP + NODE_HEIGHT / 2;

        const isSourceCompleted = completedQuestIds.includes(sourceQuest.id);
        const isTargetCompleted = completedQuestIds.includes(targetQuest.id);
        const isPathActive = isSourceCompleted && isTargetCompleted;

        // Smooth cubic bezier curve
        const dx = Math.max(40, (x2 - x1) * 0.5);
        const pathData = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

        lines.push(
          <path
            key={`${sourceQuest.id}->${targetQuest.id}`}
            d={pathData}
            fill="none"
            stroke={isPathActive ? '#10b981' : isSourceCompleted ? '#f59e0b' : '#30363d'}
            strokeWidth={isPathActive ? 2.5 : 1.5}
            strokeDasharray={isPathActive ? 'none' : '4 4'}
            opacity={isPathActive ? 0.9 : 0.6}
            className="transition-colors duration-300"
          />
        );
      });
    });

    return lines;
  }, [quests, completedQuestIds]);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#090c10] overflow-hidden select-none relative">
      {/* Top Filter and Controls Bar */}
      <div className="px-4 py-2.5 bg-[#0d1117] border-b border-[#21262d] flex flex-wrap items-center justify-between gap-3 shrink-0 z-10 shadow-md">
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-1.5 overflow-x-auto text-xs font-mono">
          <span className="text-neutral-500 mr-1 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            路線篩選:
          </span>
          {Object.entries(CATEGORY_NAMES).map(([key, label]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                    : 'bg-[#161b22] border border-[#30363d] text-neutral-400 hover:text-neutral-200 hover:border-neutral-500'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Pan & Zoom Controls */}
        <div className="flex items-center gap-2">
          {/* Pan Drag Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161b22] border border-[#30363d] text-[11px] font-mono text-neutral-400">
            <Hand className="w-3.5 h-3.5 text-amber-400" />
            <span>按住左鍵拖曳移動</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded p-1 text-xs font-mono">
            <button
              onClick={handleZoomOut}
              className="p-1 text-neutral-400 hover:text-white rounded hover:bg-[#21262d]"
              title="縮小視角"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 text-neutral-300 min-w-[42px] text-center font-bold">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1 text-neutral-400 hover:text-white rounded hover:bg-[#21262d]"
              title="放大視角"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetView}
              className="p-1 text-neutral-400 hover:text-amber-400 rounded hover:bg-[#21262d] border-l border-[#30363d] ml-1 pl-1.5 flex items-center gap-1"
              title="重置位置與縮放 (100% 回到原點)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px]">重置原點</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pannable Canvas Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`flex-1 relative overflow-hidden bg-[radial-gradient(#1f2937_1.2px,transparent_1.2px)] [background-size:28px_28px] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Floating Mini Reset & Info Badge */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handleResetView}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161b22]/90 backdrop-blur-xs border border-[#30363d] text-xs font-mono text-neutral-300 hover:text-amber-300 hover:border-amber-500/50 shadow-lg transition-colors"
          >
            <Move className="w-3.5 h-3.5 text-amber-400" />
            <span>平移: X: {Math.round(pan.x)} Y: {Math.round(pan.y)}</span>
          </button>
        </div>

        {/* Scaled and Panned World Layer */}
        <div
          className="absolute origin-top-left transition-none will-change-transform"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            width: `${PADDING_X * 2 + 11 * COL_GAP + NODE_WIDTH}px`,
            height: `${PADDING_Y * 2 + 7 * ROW_GAP + NODE_HEIGHT}px`,
          }}
        >
          {/* SVG Dependency Lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{
              width: `${PADDING_X * 2 + 11 * COL_GAP + NODE_WIDTH}px`,
              height: `${PADDING_Y * 2 + 7 * ROW_GAP + NODE_HEIGHT}px`,
            }}
          >
            {connectionLines}
          </svg>

          {/* Interactive Quest Nodes */}
          {quests.map((quest) => {
            const isCompleted = completedQuestIds.includes(quest.id);
            const isSelectedChoice = !!selectedChoiceIds[quest.id];
            const isVisible = filteredQuests.some((q) => q.id === quest.id);

            const x = PADDING_X + quest.gridPos.column * COL_GAP;
            const y = PADDING_Y + quest.gridPos.row * ROW_GAP;

            return (
              <div
                key={quest.id}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  width: `${NODE_WIDTH}px`,
                  height: `${NODE_HEIGHT}px`,
                }}
                className={`group rounded border transition-all duration-200 cursor-pointer flex flex-col justify-between p-3 select-none ${
                  !isVisible ? 'opacity-20 pointer-events-none' : 'opacity-100'
                } ${
                  isCompleted
                    ? 'bg-[#101b15] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                    : quest.isBranchPoint
                    ? 'bg-[#1a1215] border-red-500/50 hover:border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.1)]'
                    : 'bg-[#161b22] border-[#30363d] hover:border-amber-500/70 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(quest);
                }}
              >
                {/* Node Header */}
                <div className="flex items-center justify-between gap-1.5">
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/40 text-neutral-400 border border-neutral-700">
                    {quest.actLabel}
                  </span>

                  <div className="flex items-center gap-1">
                    {quest.isBranchPoint && (
                      <span
                        title="關鍵分岔抉擇點"
                        className="p-1 rounded bg-red-950/80 border border-red-500/50 text-red-300"
                      >
                        <GitBranch className="w-3 h-3 text-red-400" />
                      </span>
                    )}

                    {quest.isPointOfNoReturn && (
                      <span
                        title="無退路點"
                        className="p-1 rounded bg-purple-950/80 border border-purple-500/50 text-purple-300 animate-pulse"
                      >
                        <AlertTriangle className="w-3 h-3 text-amber-400" />
                      </span>
                    )}

                    {/* Quick Complete Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleQuestCompleted(quest.id);
                      }}
                      className="p-1 text-neutral-400 hover:text-emerald-400 transition-colors"
                      title={isCompleted ? '取消完成' : '標記完成'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-neutral-500 hover:text-neutral-300" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Node Title & Subtitle */}
                <div>
                  <h4
                    className={`text-xs font-bold truncate leading-snug ${
                      isCompleted ? 'text-emerald-200' : 'text-neutral-100 group-hover:text-amber-300'
                    }`}
                  >
                    {quest.title}
                  </h4>
                  <div className="text-[10px] text-neutral-500 font-mono truncate">
                    {quest.titleEn}
                  </div>
                </div>

                {/* Node Footer: Associated NPC or Rewards */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-[#21262d]">
                  <span className="truncate max-w-[140px] text-neutral-400">
                    {quest.associatedNpc || '主線委託'}
                  </span>
                  {quest.choices && (
                    <span className="text-amber-400/90 text-[10px]">
                      {quest.choices.length} 分支
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
