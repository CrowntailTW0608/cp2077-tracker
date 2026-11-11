import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Sidebar, SidebarTab } from './components/Sidebar';
import { FlowchartCanvas } from './components/FlowchartCanvas';
import { ChecklistView } from './components/ChecklistView';
import { CharactersView } from './components/CharactersView';
import { VehiclesView } from './components/VehiclesView';
import { EndingsView } from './components/EndingsView';
import { WeaponsView } from './components/WeaponsView';
import { TarotView } from './components/TarotView';
import { CyberpsychosView } from './components/CyberpsychosView';
import { FixersView } from './components/FixersView';
import { BuildsView } from './components/BuildsView';
import { MissionDrawer } from './components/MissionDrawer';
import { EndingsModal } from './components/EndingsModal';
import { SaveSlotModal } from './components/SaveSlotModal';

import { QUESTS_DATA } from './data/questsData';
import { CHARACTERS_DATA } from './data/charactersData';
import { VEHICLES_DATA } from './data/vehiclesData';
import { WEAPONS_DATA } from './data/weaponsData';
import { TAROT_DATA } from './data/tarotData';
import { CYBERPSYCHOS_DATA } from './data/cyberpsychosData';
import { FIXERS_DATA } from './data/fixersData';
import { BUILDS_DATA } from './data/buildsData';
import {
  evaluateEndings,
  loadSaveSlots,
  saveSaveSlots,
  getDefaultSaveSlot
} from './utils/questEngine';
import { QuestNode, SaveSlot } from './types/quest';

export function App() {
  // Load saved slots
  const [slots, setSlots] = useState<Record<string, SaveSlot>>(() => loadSaveSlots());
  const [activeSlotId, setActiveSlotId] = useState<string>(() => {
    const keys = Object.keys(slots);
    return keys.includes('default') ? 'default' : keys[0] || 'default';
  });

  const activeSlot = useMemo(() => {
    return slots[activeSlotId] || getDefaultSaveSlot();
  }, [slots, activeSlotId]);

  // Core navigation & view states
  const [activeTab, setActiveTab] = useState<SidebarTab>('quests');
  const [viewMode, setViewMode] = useState<'flowchart' | 'checklist'>('flowchart');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [spoilerMode, setSpoilerMode] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [selectedQuest, setSelectedQuest] = useState<QuestNode | null>(null);
  const [isEndingsModalOpen, setIsEndingsModalOpen] = useState<boolean>(false);
  const [isSaveSlotModalOpen, setIsSaveSlotModalOpen] = useState<boolean>(false);

  // Sync slots to localStorage whenever changed
  useEffect(() => {
    saveSaveSlots(slots);
  }, [slots]);

  // Evaluate endings in real-time
  const endings = useMemo(() => {
    return evaluateEndings(
      activeSlot.completedQuestIds,
      activeSlot.selectedChoiceIds
    );
  }, [activeSlot.completedQuestIds, activeSlot.selectedChoiceIds]);

  // Progress update helper
  const updateActiveSlot = (updater: (prev: SaveSlot) => Partial<SaveSlot>) => {
    setSlots((prev) => {
      const current = prev[activeSlotId] || getDefaultSaveSlot();
      const updated = {
        ...current,
        ...updater(current),
        updatedAt: new Date().toISOString()
      };
      return {
        ...prev,
        [activeSlotId]: updated
      };
    });
  };

  // Toggle Quest Completed
  const handleToggleQuestCompleted = (questId: string) => {
    updateActiveSlot((slot) => {
      const exists = slot.completedQuestIds.includes(questId);
      const newCompleted = exists
        ? slot.completedQuestIds.filter((id) => id !== questId)
        : [...slot.completedQuestIds, questId];
      return { completedQuestIds: newCompleted };
    });
  };

  // Select a Branch Choice
  const handleSelectChoice = (questId: string, choiceId: string) => {
    updateActiveSlot((slot) => {
      const currentChoice = slot.selectedChoiceIds[questId];
      const newChoices = { ...slot.selectedChoiceIds };
      if (currentChoice === choiceId) {
        delete newChoices[questId];
      } else {
        newChoices[questId] = choiceId;
        // Automatically mark the quest as completed when picking a choice
        if (!slot.completedQuestIds.includes(questId)) {
          return {
            selectedChoiceIds: newChoices,
            completedQuestIds: [...slot.completedQuestIds, questId]
          };
        }
      }
      return { selectedChoiceIds: newChoices };
    });
  };

  // Toggle Vehicle Owned
  const handleToggleOwnedVehicle = (vehicleId: string) => {
    updateActiveSlot((slot) => {
      const currentOwned = slot.ownedVehicleIds || [];
      const exists = currentOwned.includes(vehicleId);
      const newOwned = exists
        ? currentOwned.filter((id) => id !== vehicleId)
        : [...currentOwned, vehicleId];
      return { ownedVehicleIds: newOwned };
    });
  };

  // Toggle Iconic Weapon Owned
  const handleToggleOwnedWeapon = (weaponId: string) => {
    updateActiveSlot((slot) => {
      const currentOwned = slot.ownedWeaponIds || [];
      const exists = currentOwned.includes(weaponId);
      const newOwned = exists
        ? currentOwned.filter((id) => id !== weaponId)
        : [...currentOwned, weaponId];
      return { ownedWeaponIds: newOwned };
    });
  };

  // Toggle Tarot Mural Collected
  const handleToggleCollectedTarot = (tarotId: string) => {
    updateActiveSlot((slot) => {
      const currentCollected = slot.collectedTarotIds || [];
      const exists = currentCollected.includes(tarotId);
      const newCollected = exists
        ? currentCollected.filter((id) => id !== tarotId)
        : [...currentCollected, tarotId];
      return { collectedTarotIds: newCollected };
    });
  };

  // Toggle Cyberpsycho Non-Lethal Neutralized
  const handleToggleCapturedCyberpsycho = (targetId: string) => {
    updateActiveSlot((slot) => {
      const currentCaptured = slot.capturedCyberpsychoIds || [];
      const exists = currentCaptured.includes(targetId);
      const newCaptured = exists
        ? currentCaptured.filter((id) => id !== targetId)
        : [...currentCaptured, targetId];
      return { capturedCyberpsychoIds: newCaptured };
    });
  };

  // Toggle Fixer Gigs Completed
  const handleToggleCompletedFixer = (fixerId: string) => {
    updateActiveSlot((slot) => {
      const currentDone = slot.completedFixerIds || [];
      const exists = currentDone.includes(fixerId);
      const newDone = exists
        ? currentDone.filter((id) => id !== fixerId)
        : [...currentDone, fixerId];
      return { completedFixerIds: newDone };
    });
  };

  // Slot Management
  const handleSwitchSlot = (slotId: string) => {
    if (slots[slotId]) {
      setActiveSlotId(slotId);
    }
  };

  const handleCreateSlot = (name: string) => {
    const newId = `slot_${Date.now()}`;
    const newSlot: SaveSlot = {
      id: newId,
      name,
      updatedAt: new Date().toISOString(),
      completedQuestIds: ['prologue_rescue_sandra', 'act1_the_ripperdoc'],
      selectedChoiceIds: {},
      ownedVehicleIds: ['archer_hella_ecd_i360'],
      note: '新建立周目'
    };
    setSlots((prev) => ({ ...prev, [newId]: newSlot }));
    setActiveSlotId(newId);
  };

  const handleDeleteSlot = (slotId: string) => {
    setSlots((prev) => {
      const copy = { ...prev };
      delete copy[slotId];
      return copy;
    });
    if (activeSlotId === slotId) {
      setActiveSlotId('default');
    }
  };

  const handleResetActiveSlot = () => {
    updateActiveSlot(() => ({
      completedQuestIds: ['prologue_rescue_sandra', 'act1_the_ripperdoc'],
      selectedChoiceIds: {},
      ownedVehicleIds: ['archer_hella_ecd_i360']
    }));
  };

  // Cross-Navigation Helpers
  const handleNavigateToQuest = (questId: string) => {
    const targetQuest = QUESTS_DATA.find((q) => q.id === questId);
    if (targetQuest) {
      setActiveTab('quests');
      setSelectedQuest(targetQuest);
    }
  };

  return (
    <div className="min-h-screen bg-[#090c10] text-[#e6edf3] flex flex-col font-sans">
      {/* Top HUD Header */}
      <Header
        spoilerMode={spoilerMode}
        onToggleSpoiler={() => setSpoilerMode((v) => !v)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSlot={activeSlot}
        onOpenSaveSlotModal={() => setIsSaveSlotModalOpen(true)}
        endings={endings}
        onOpenEndingsModal={() => setIsEndingsModalOpen(true)}
        activeTab={activeTab}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebarCollapse={() => setIsSidebarCollapsed((v) => !v)}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          questCount={QUESTS_DATA.length}
          completedQuestCount={activeSlot.completedQuestIds.length}
          vehicleCount={VEHICLES_DATA.length}
          ownedVehicleCount={activeSlot.ownedVehicleIds?.length || 0}
          characterCount={CHARACTERS_DATA.length}
          unlockedEndingsCount={endings.filter((e) => e.isUnlocked).length}
          totalEndingsCount={endings.length}
          weaponsCount={WEAPONS_DATA.length}
          ownedWeaponsCount={activeSlot.ownedWeaponIds?.length || 0}
          tarotCount={TAROT_DATA.length}
          collectedTarotCount={activeSlot.collectedTarotIds?.length || 0}
          cyberpsychoCount={CYBERPSYCHOS_DATA.length}
          capturedCyberpsychoCount={activeSlot.capturedCyberpsychoIds?.length || 0}
          fixersCount={FIXERS_DATA.length}
          completedFixersCount={activeSlot.completedFixerIds?.length || 0}
          buildsCount={BUILDS_DATA.length}
          onOpenSaveModal={() => setIsSaveSlotModalOpen(true)}
          activeSlotName={activeSlot.name}
          isCollapsed={isSidebarCollapsed}
        />

        {/* Content View Router */}
        <main className="flex-1 flex flex-col min-w-0 h-[calc(100vh-61px)] overflow-hidden">
          {activeTab === 'quests' && (
            <>
              {viewMode === 'flowchart' ? (
                <FlowchartCanvas
                  quests={QUESTS_DATA}
                  completedQuestIds={activeSlot.completedQuestIds}
                  selectedChoiceIds={activeSlot.selectedChoiceIds}
                  onSelectQuest={(quest) => setSelectedQuest(quest)}
                  onToggleQuestCompleted={handleToggleQuestCompleted}
                  searchQuery={searchQuery}
                />
              ) : (
                <ChecklistView
                  quests={QUESTS_DATA}
                  completedQuestIds={activeSlot.completedQuestIds}
                  selectedChoiceIds={activeSlot.selectedChoiceIds}
                  onSelectQuest={(quest) => setSelectedQuest(quest)}
                  onToggleQuestCompleted={handleToggleQuestCompleted}
                  searchQuery={searchQuery}
                />
              )}
            </>
          )}

          {activeTab === 'characters' && (
            <CharactersView
              onSelectQuestId={handleNavigateToQuest}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'vehicles' && (
            <VehiclesView
              ownedVehicleIds={activeSlot.ownedVehicleIds || []}
              onToggleOwnedVehicle={handleToggleOwnedVehicle}
              onNavigateToQuest={handleNavigateToQuest}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'endings' && (
            <EndingsView
              endings={endings}
              onNavigateToQuest={handleNavigateToQuest}
            />
          )}

          {activeTab === 'weapons' && (
            <WeaponsView
              ownedWeaponIds={activeSlot.ownedWeaponIds || []}
              onToggleOwnedWeapon={handleToggleOwnedWeapon}
              onNavigateToQuest={handleNavigateToQuest}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'tarot' && (
            <TarotView
              collectedTarotIds={activeSlot.collectedTarotIds || []}
              onToggleCollectedTarot={handleToggleCollectedTarot}
              onNavigateToQuest={handleNavigateToQuest}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'cyberpsychos' && (
            <CyberpsychosView
              capturedIds={activeSlot.capturedCyberpsychoIds || []}
              onToggleCaptured={handleToggleCapturedCyberpsycho}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'fixers' && (
            <FixersView
              completedFixerIds={activeSlot.completedFixerIds || []}
              onToggleCompletedFixer={handleToggleCompletedFixer}
              onNavigateToQuest={handleNavigateToQuest}
              searchQuery={searchQuery}
            />
          )}

          {activeTab === 'builds' && (
            <BuildsView
              onNavigateToQuest={handleNavigateToQuest}
            />
          )}
        </main>
      </div>

      {/* Mission Detail Slide-out Drawer */}
      <MissionDrawer
        quest={selectedQuest}
        isOpen={!!selectedQuest}
        onClose={() => setSelectedQuest(null)}
        isCompleted={
          selectedQuest ? activeSlot.completedQuestIds.includes(selectedQuest.id) : false
        }
        onToggleCompleted={handleToggleQuestCompleted}
        selectedChoiceId={
          selectedQuest ? activeSlot.selectedChoiceIds[selectedQuest.id] : undefined
        }
        onSelectChoice={handleSelectChoice}
        spoilerMode={spoilerMode}
      />

      {/* Endings Modal */}
      <EndingsModal
        isOpen={isEndingsModalOpen}
        onClose={() => setIsEndingsModalOpen(false)}
        endings={endings}
      />

      {/* Save Slots Modal */}
      <SaveSlotModal
        isOpen={isSaveSlotModalOpen}
        onClose={() => setIsSaveSlotModalOpen(false)}
        slots={slots}
        activeSlotId={activeSlotId}
        onSwitchSlot={handleSwitchSlot}
        onCreateSlot={handleCreateSlot}
        onDeleteSlot={handleDeleteSlot}
        onResetActiveSlot={handleResetActiveSlot}
      />
    </div>
  );
}

export default App;
