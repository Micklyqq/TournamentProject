import create from "zustand";

export const CommandStore=create(set=>({
    _commands:[{}],
    setCommand:(command)=>set({_commands:command}),
}))