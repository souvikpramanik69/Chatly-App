"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatUI;
const react_1 = require("react");
const core_1 = require("@mantine/core");
// ─── Mock messages ─────────────────────────────────────────────
const INITIAL_MESSAGES = [
    { id: 1, from: "them", text: "Hey! Did you check the design?" },
    { id: 2, from: "me", text: "Yes, looks really clean 🔥" },
    { id: 3, from: "them", text: "Should we reduce steps?" },
    { id: 4, from: "me", text: "No, 4 steps feels fine." },
];
// ─── Message Bubble ────────────────────────────────────────────
function Bubble({ msg }) {
    const isMe = msg.from === "me";
    return (<core_1.Flex justify={isMe ? "flex-end" : "flex-start"} align="flex-end" mb={8}>
      {!isMe && (<core_1.Avatar size={28} radius="xl" color="grape" mr={6}>
          U
        </core_1.Avatar>)}

      <core_1.Paper px="md" py="sm" radius="lg" style={{
            maxWidth: "70%",
            background: isMe ? "#7c3aed" : "#1a1a1a",
            color: "#fff",
            borderBottomRightRadius: isMe ? 4 : undefined,
            borderBottomLeftRadius: !isMe ? 4 : undefined,
        }}>
        <core_1.Text size="sm">{msg.text}</core_1.Text>
      </core_1.Paper>

      {isMe && (<core_1.Avatar size={28} radius="xl" color="violet" ml={6}>
          M
        </core_1.Avatar>)}
    </core_1.Flex>);
}
// ─── Main Chat UI ──────────────────────────────────────────────
function ChatUI() {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [message, setMessage] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => { }, []);
    const sendMessage = () => {
        if (!message.trim())
            return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), from: "me", message: message },
        ]);
        setMessage("");
    };
    return (<core_1.Flex direction="column" h="100%" style={{
            background: "#0f0f0f",
            color: "#fff",
            border: "1px solid #222",
        }}>
      {/* Header */}
      <core_1.Flex px="md" py="sm" align="center" style={{
            borderBottom: "1px solid #222",
        }}>
        <core_1.Avatar color="violet" radius="xl">
          P
        </core_1.Avatar>
        <core_1.Box ml={10}>
          <core_1.Text size="sm" fw={600}>
            Priya
          </core_1.Text>
          <core_1.Text size="xs" c="dimmed">
            Online
          </core_1.Text>
        </core_1.Box>
      </core_1.Flex>

      {/* Messages */}
      <core_1.ScrollArea flex={1} styles={{ viewport: { padding: 16 } }}>
        {messages.map((msg) => (<Bubble key={msg.id} msg={msg}/>))}
      </core_1.ScrollArea>

      {/* Input */}
    </core_1.Flex>);
}
//# sourceMappingURL=ChatMessage.js.map