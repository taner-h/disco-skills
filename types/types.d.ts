type MessageType =
  | NpcMessage
  | SystemMessage
  | SkillMessage
  | UserMessage
  | ErrorMessage;

type NpcMessage = {
  type: "npc";
  name?: string;
  text: string;
};

type UserMessage = {
  type: "user";
  text: string;
};

type SystemMessage = {
  type: "system";
  text: string;
};

type SkillMessage = {
  type: "skill";
  skill: string;
  attribute: string;
  difficulty: string;
  outcome: string;
  text: string;
};

type ErrorMessage = {
  type: "error";
  text: string;
};

type Result = 1 | 2 | 3 | 4 | 5 | 6;

type Option = {
  text: string;
  callback: () => void;
  isClicked: boolean;
};
