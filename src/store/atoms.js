import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const conversationState = atom({
  key: "conversationState",
  default: [],
});

export const pastConversationsState = atom({
  key: "pastConversationsState",
  default: [],
});

export const filteredConversationsState = atom({
  key: "filteredConversationsState",
  default: [],
});

export const activeItemState = atom({
  key: 'activeItemState',
  default: 'Search',
});

export const notificationsEnabledState = atom({
  key: 'notificationsEnabledState',
  default: true,
});

export const pinnedQueriesState = atom({
  key: 'pinnedQueriesState',
  default: []
});

export const importNotificationsState = atom({
  key: 'importNotificationsState',
  default: []
});

export const jwtTokenState = atom({
  key:'jwtTokenState',
  default: ''
});

export const rolesState = atom({
  key:'rolesState',
  default: []
});

export const subState = atom({
  key:'subState',
  default: ''
});

export const tenantGroupState = atom({
  key:'tenantGroupState',
  default: []
});

export const userEmailState = atom({
  key:'userEmailState',
  default: ''
});

export const isSuperAdminState = atom({
  key: 'isSuperAdminState',
  default: ''
});

export const isTenantAdminRoleState = atom({
  key: 'isTenantAdminRoleState',
  default:''
});

export const expState = atom({
  key:'expState',
  default:''
});

export const firstNameState = atom({
  key:'firstNameState',
  default:''
});

export const numeroActiveState = atom({
  key:'numeroActiveState',
  default:false,
});

export const displayRoleState = atom({
  key:'displayRoleState',
  default:''
});

export const conversationIdState = atom({
  key:'conversationIdState',
  default:''
});

export const responseErrorState = atom({
  key:'responseErrorState',
  default:''
});

export const mfaActiveState = atom({
  key: 'mfaActiveState',
  default: null,
});

export const tableLoadingState = atom({
  key:'tableLoadingState',
  default: false,
});

export const isSearchUploadedFilesState = atom({
  key: 'isSearchUploadedFilesState',
  default: false,
});

// New atom for selected team with persistence
export const selectedTeamState = atom({
  key: 'selectedTeamState',
  default: {
    initials: '',
    name: '',
    bgColor: '',
    textColor: ''
  },
  effects_UNSTABLE: [persistAtom],
});