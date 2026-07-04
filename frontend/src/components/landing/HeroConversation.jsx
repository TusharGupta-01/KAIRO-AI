import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Loader2, CheckCircle2, Circle } from "lucide-react";
// const steps = [
//   {
//     title: "Analyzing your profile...",
//     done: "Profile analyzed",
//     message: "I'm analyzing your academic profile.",
//   },
//   {
//     title: "Understanding your goals...",
//     done: "Goals understood",
//     message: "I found your career interests.",
//   },
//   {
//     title: "Building your personalized roadmap...",
//     done: "Roadmap created",
//     message: "Generating a personalized roadmap.",
//   },
//   {
//     title: "Preparing your AI mentor...",
//     done: "AI Mentor ready",
//     message: "Training your personal AI Mentor.",
//   },
//   {
//     title: "Connecting Knowledge Vault...",
//     done: "Knowledge Vault connected",
//     message: "Connecting your Knowledge Vault.",
//   },
//   {
//     title: "Finding top internships...",
//     done: "Top internships found",
//     message: "Searching the best opportunities.",
//   },
// ];
const conversations = [
  {
    prompt: "I want a Google Software Engineering Internship.",
    success: "Google Internship Strategy Ready",
    steps: [
      {
        title: "Analyzing your profile...",
        message: "Understanding your academic background.",
      },
      {
        title: "Identifying Google requirements...",
        message: "Checking Google's hiring expectations.",
      },
      {
        title: "Building DSA roadmap...",
        message: "Creating a structured DSA preparation plan.",
      },
      {
        title: "Preparing interview strategy...",
        message: "Planning coding and behavioral preparation.",
      },
      {
        title: "Finding internship opportunities...",
        message: "Searching Google and similar companies.",
      },
    ],
  },

  {
    prompt: "Help me crack my placement interviews.",
    success: "Placement Preparation Ready",
    steps: [
      {
        title: "Analyzing your profile...",
        message: "Understanding your strengths.",
      },
      {
        title: "Finding skill gaps...",
        message: "Detecting missing placement skills.",
      },
      {
        title: "Creating placement roadmap...",
        message: "Preparing daily interview plan.",
      },
      {
        title: "Scheduling mock interviews...",
        message: "Adding interview practice sessions.",
      },
      {
        title: "Preparing aptitude resources...",
        message: "Collecting important aptitude material.",
      },
    ],
  },

  {
    prompt: "I want to become an AI Engineer.",
    success: "AI Career Workspace Ready",
    steps: [
      {
        title: "Understanding your interests...",
        message: "Learning your AI goals.",
      },
      {
        title: "Selecting AI learning path...",
        message: "Choosing the right roadmap.",
      },
      {
        title: "Creating 30-Day roadmap...",
        message: "Designing personalized missions.",
      },
      {
        title: "Preparing AI Mentor...",
        message: "Activating your personal mentor.",
      },
      {
        title: "Connecting Knowledge Vault...",
        message: "Preparing your learning workspace.",
      },
    ],
  },

  {
    prompt: "Find internships matching my profile.",
    success: "Personalized Opportunities Ready",
    steps: [
      {
        title: "Reading your profile...",
        message: "Understanding your experience.",
      },
      {
        title: "Matching your skills...",
        message: "Comparing skills with job requirements.",
      },
      {
        title: "Searching internships...",
        message: "Finding relevant opportunities.",
      },
      {
        title: "Ranking opportunities...",
        message: "Sorting by relevance.",
      },
      {
        title: "Saving recommendations...",
        message: "Adding opportunities to your workspace.",
      },
    ],
  },
];

export default function HeroConversation() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [thinking, setThinking] = useState(true);
  const [completed, setCompleted] = useState(false);
  // const prompts = [
  //   "I want a Google Software Engineering Internship.",
  //   "Help me crack my placement interviews.",
  //   "I want to become an AI Engineer.",
  //   "Find internships matching my profile.",
  //   "Build my roadmap for Data Science.",
  // ];
  const [conversationIndex, setConversationIndex] = useState(0);

  const currentConversation = conversations[conversationIndex];

  const steps = currentConversation.steps;

  const [promptIndex, setPromptIndex] = useState(0);

  const [typedText, setTypedText] = useState("");
  const getStatus = (index) => {
    if (thinking) return "pending";

    if (index < currentStep) return "completed";

    if (index === currentStep) return "active";

    return "pending";
  };
  useEffect(() => {
    const currentPrompt = currentConversation.prompt;

    let i = 0;

    setTypedText("");

    const interval = setInterval(() => {
      setTypedText(currentPrompt.slice(0, i));

      i++;

      if (i > currentPrompt.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [conversationIndex]);
  useEffect(() => {
    let timeout;

    function startAnimation() {
      setThinking(true);
      setCompleted(false);
      setCurrentStep(-1);

      timeout = setTimeout(() => {
        setThinking(false);

        let i = 0;

        const interval = setInterval(() => {
          setCurrentStep(i);

          i++;

          if (i === steps.length) {
            clearInterval(interval);

            setTimeout(() => {
              setCompleted(true);
              setTimeout(() => {
                setConversationIndex(
                  (prev) => (prev + 1) % conversations.length,
                );

                startAnimation();
              }, 2500);
            }, 800);
          }
        }, 900);
      }, 1800);
    }

    startAnimation();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
    mx-auto
    w-full
    max-w-6xl
    overflow-hidden
    rounded-2xl
    md:rounded-[36px]
    border
    border-zinc-200
    bg-white
    shadow-[0_20px_60px_rgba(0,0,0,.08)]
  "
    >
      {/* USER */}

      <div className="border-b border-zinc-100 p-5 sm:p-6 lg:p-8">
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-14 sm:w-14">
            <User size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm text-zinc-500">You</p>

            <h3 className="mt-1 break-words text-sm sm:text-base lg:text-lg font-semibold leading-snug text-zinc-900 sm:text-xl lg:text-2xl">
              {typedText}

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                |
              </motion.span>
            </h3>
          </div>
        </div>
      </div>

      {/* AI */}

      <div className="p-5 sm:p-6 lg:p-8">
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg sm:h-14 sm:w-14">
            <Bot size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 sm:text-xl">
              {thinking
                ? "Thinking..."
                : completed
                  ? "Workspace Ready"
                  : steps[currentStep]?.message}
            </h2>

            <motion.p
              key={thinking ? "thinking" : currentStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm leading-6 text-zinc-600 sm:text-base"
            >
              {thinking
                ? "Initializing KAIRO..."
                : completed
                  ? "Everything is ready."
                  : steps[currentStep]?.message}
            </motion.p>

            {/* Thinking */}

            <AnimatePresence>
              {thinking && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="
                  mt-8
                  rounded-3xl
                  border
                  border-zinc-200
                  bg-zinc-50
                  p-6
                  "
                >
                  <div className="flex items-center gap-3">
                    <Loader2 className="animate-spin text-blue-600" size={22} />

                    <span className="text-xl font-bold text-zinc-300">
                      Thinking...
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                      }}
                      className="h-3 w-3 rounded-full bg-blue-500"
                    />

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0.15,
                      }}
                      className="h-3 w-3 rounded-full bg-violet-500"
                    />

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0.3,
                      }}
                      className="h-3 w-3 rounded-full bg-blue-500"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!thinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="
      mt-8
      overflow-hidden
      rounded-3xl
      border
      border-zinc-200
      bg-zinc-50
      "
                >
                  {steps.map((step, index) => {
                    const status = getStatus(index);

                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        className={`
relative
flex
flex-col
gap-4
border-b
px-4
py-5
transition-all
duration-500

sm:flex-row
sm:items-center
sm:justify-between

md:px-7
border-b

${status === "active" ? "bg-blue-50" : ""}
`}
                      >
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          {/* Timeline */}

                          <div className="relative">
                            <div className="relative flex flex-col items-center">
                              {index !== steps.length - 1 && (
                                <motion.div
                                  initial={{
                                    height: 0,
                                  }}
                                  animate={{
                                    height:
                                      status === "completed"
                                        ? 44
                                        : status === "active"
                                          ? 22
                                          : 0,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                  }}
                                  className="
      absolute
      top-6
      w-[2px]
      bg-blue-500
      "
                                />
                              )}

                              {status === "completed" ? (
                                <motion.div
                                  initial={{
                                    scale: 0.5,
                                  }}
                                  animate={{
                                    scale: 1,
                                  }}
                                >
                                  <CheckCircle2
                                    className="text-emerald-500"
                                    size={22}
                                  />
                                </motion.div>
                              ) : status === "active" ? (
                                <motion.div
                                  animate={{
                                    scale: [1, 1.15, 1],
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                  }}
                                >
                                  <Loader2
                                    className="animate-spin text-blue-600"
                                    size={22}
                                  />
                                </motion.div>
                              ) : (
                                <Circle className="text-zinc-300" size={20} />
                              )}
                            </div>
                          </div>

                          <div>
                            <p
                              className={`text-sm sm:text-base lg:text-lg font-medium ${
                                status === "pending"
                                  ? "text-zinc-400"
                                  : "text-zinc-900"
                              }`}
                            >
                              {step.title}
                            </p>
                          </div>
                        </div>

                        <div className="self-end sm:self-auto shrink-0">
                          {status === "completed" && (
                            <span className="text-sm font-semibold text-emerald-600">
                              Completed
                            </span>
                          )}

                          {status === "active" && (
                            <span className="text-sm font-semibold text-blue-600">
                              In Progress
                            </span>
                          )}

                          {status === "pending" && (
                            <span className="text-sm text-zinc-500">
                              Pending
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Bottom Status */}

                  <AnimatePresence>
                    {completed && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-t border-zinc-200 bg-gradient-to-r from-blue-50 to-violet-50 p-5 sm:p-6"
                      >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                            ✨
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-zinc-900">
                              {currentConversation.success}
                            </h3>

                            <p className="mt-2 break-words text-sm leading-6 text-zinc-600">
                              {steps
                                .map((step) => step.title.replace("...", ""))
                                .join(" • ")}
                            </p>

                            <p className="mt-3 text-sm text-zinc-500">
                              Your personalized career workspace has been
                              created.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Input */}

      <div className="border-t border-zinc-100 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <input
            readOnly
            value="Ask KAIRO anything..."
            className="
flex-1
rounded-full
border
border-zinc-200
bg-zinc-50
px-4
py-3
text-sm
text-zinc-500
outline-none

sm:px-6
sm:py-4
sm:text-base
"
          />

          <button
            className="
flex
h-11
w-11
shrink-0
items-center
justify-center
rounded-full
bg-black
text-white

sm:h-14
sm:w-14
"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
