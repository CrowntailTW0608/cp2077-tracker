import React from 'react';
import { X, Trophy, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { EndingStatus } from '../types/quest';

interface EndingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  endings: EndingStatus[];
}

export const EndingsModal: React.FC<EndingsModalProps> = ({ isOpen, onClose, endings }) => {
  if (!isOpen) return null;

  const unlockedCount = endings.filter((e) => e.isUnlocked).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#21262d] bg-[#161b22] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold text-neutral-100">
                結局達成即時推導報告
              </h2>
              <div className="text-xs font-mono text-neutral-400">
                已解鎖 {unlockedCount} / {endings.length} 個結局路線
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {endings.map((ending) => (
              <div
                key={ending.id}
                className={`p-4 rounded border text-xs font-mono ${
                  ending.isUnlocked
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-200'
                    : 'bg-[#161b22] border-[#21262d] text-neutral-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-sm text-neutral-100">
                    {ending.name}
                  </div>
                  {ending.isUnlocked ? (
                    <span className="px-1.5 py-0.5 text-[10px] bg-emerald-500 text-black font-bold rounded flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      已解鎖
                    </span>
                  ) : (
                    <span className="px-1.5 py-0.5 text-[10px] bg-[#21262d] text-neutral-400 rounded flex items-center gap-1 shrink-0">
                      <Lock className="w-3 h-3" />
                      未達成
                    </span>
                  )}
                </div>

                <p className="mt-2 text-neutral-400 font-sans leading-relaxed">
                  {ending.description}
                </p>

                {!ending.isUnlocked && ending.missingRequirements.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-[#30363d] text-red-300 space-y-1">
                    <span className="font-bold text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      缺少的解鎖條件：
                    </span>
                    {ending.missingRequirements.map((req, idx) => (
                      <div key={idx} className="pl-3 text-[11px]">
                        • {req}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#161b22] border-t border-[#21262d] text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#21262d] hover:bg-neutral-700 text-neutral-200 text-xs font-mono rounded"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
