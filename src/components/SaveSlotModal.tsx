import React, { useState } from 'react';
import { X, FolderArchive, Plus, Trash2, Check, RefreshCw, Calendar } from 'lucide-react';
import { SaveSlot } from '../types/quest';

interface SaveSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  slots: Record<string, SaveSlot>;
  activeSlotId: string;
  onSwitchSlot: (slotId: string) => void;
  onCreateSlot: (name: string) => void;
  onDeleteSlot: (slotId: string) => void;
  onResetActiveSlot: () => void;
}

export const SaveSlotModal: React.FC<SaveSlotModalProps> = ({
  isOpen,
  onClose,
  slots,
  activeSlotId,
  onSwitchSlot,
  onCreateSlot,
  onDeleteSlot,
  onResetActiveSlot,
}) => {
  const [newSlotName, setNewSlotName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlotName.trim()) return;
    onCreateSlot(newSlotName.trim());
    setNewSlotName('');
    setIsCreating(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#21262d] bg-[#161b22] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <FolderArchive className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="text-base font-bold text-neutral-100">
                多重周目存檔槽位管理
              </h2>
              <div className="text-xs font-mono text-neutral-400">
                切換或建立不同人物流派與抉擇路線
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#21262d] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="space-y-2.5">
            {Object.values(slots).map((slot) => {
              const isActive = slot.id === activeSlotId;

              return (
                <div
                  key={slot.id}
                  onClick={() => onSwitchSlot(slot.id)}
                  className={`p-3.5 rounded border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40'
                      : 'bg-[#161b22] border-[#30363d] hover:border-neutral-400'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isActive ? 'text-amber-300' : 'text-neutral-100'}`}>
                        {slot.name}
                      </span>
                      {isActive && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-amber-500 text-black font-bold rounded">
                          使用中
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-mono text-neutral-400 flex items-center gap-3">
                      <span>已完成 {slot.completedQuestIds.length} 個任務</span>
                      {slot.ownedVehicleIds && (
                        <span>收藏 {slot.ownedVehicleIds.length} 輛載具</span>
                      )}
                    </div>

                    <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(slot.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {slot.id !== 'default' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`確定要刪除存檔「${slot.name}」嗎？`)) {
                            onDeleteSlot(slot.id);
                          }
                        }}
                        className="p-1.5 text-neutral-500 hover:text-red-400 rounded hover:bg-red-950/30 transition-colors"
                        title="刪除存檔"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* New Slot Form */}
          {isCreating ? (
            <form onSubmit={handleCreate} className="p-3.5 rounded bg-[#161b22] border border-[#30363d] space-y-3">
              <div className="text-xs font-mono text-neutral-300 font-bold">
                建立新周目存檔
              </div>
              <input
                type="text"
                value={newSlotName}
                onChange={(e) => setNewSlotName(e.target.value)}
                placeholder="例如：流浪者女V・星星結局線"
                autoFocus
                className="w-full px-3 py-1.5 text-xs bg-[#0d1117] border border-[#30363d] rounded text-white focus:outline-none focus:border-amber-500 font-mono"
              />
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-3 py-1 text-xs text-neutral-400 hover:text-white font-mono"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={!newSlotName.trim()}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold rounded disabled:opacity-50"
                >
                  確認建立
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setIsCreating(true)}
              className="w-full py-2.5 rounded border border-dashed border-[#30363d] hover:border-amber-500/60 text-xs font-mono text-neutral-400 hover:text-amber-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>新增周目存檔槽位</span>
            </button>
          )}

          {/* Reset Current Slot */}
          <div className="pt-3 border-t border-[#21262d] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>重置當前存檔的所有勾選進度</span>
            <button
              onClick={() => {
                if (confirm('確定要將當前存檔的進度重置回初始狀態嗎？')) {
                  onResetActiveSlot();
                }
              }}
              className="text-red-400 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              重置進度
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#161b22] border-t border-[#21262d] text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#21262d] hover:bg-neutral-700 text-neutral-200 text-xs font-mono rounded"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
