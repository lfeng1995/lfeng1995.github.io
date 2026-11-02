// Website content and source provenance. Edit this file, then run node build-site.mjs.
window.SITE_DATA = {
  "profile": {
    "name": "Lei Feng",
    "nameZh": "冯磊",
    "position": "Professor",
    "department": "School of Computer Science and Engineering",
    "institution": "Southeast University",
    "country": "China",
    "institutionUrl": "https://www.seu.edu.cn/",
    "departmentUrl": "https://cs.seu.edu.cn/",
    "lab": "PALM Lab",
    "labUrl": "https://palm.seu.edu.cn/",
    "scholarUrl": "https://scholar.google.com.sg/citations?user=KomQOFkAAAAJ&hl",
    "officialUrl": "https://cs.seu.edu.cn/fenglei/main.htm",
    "emails": [
      {
        "address": "fenglei@seu.edu.cn",
        "note": ""
      },
      {
        "address": "lfengqaq@gmail.com",
        "note": "for review invitation"
      }
    ],
    "openingsHtml": "I am also looking for highly motivated postdoctoral research fellows.<br/>Please drop me an email if you are interested.",
    "openingsText": "I am also looking for highly motivated postdoctoral research fellows. Please drop me an email if you are interested.",
    "photo": "assets/lei-feng.jpg"
  },
  "about": {
    "html": "I am a Full Professor at <a href=\"https://palm.seu.edu.cn/\">PALM Lab</a>, <a href=\"https://cs.seu.edu.cn/\">School of Computer Science and Engineering, Southeast University, China</a>. I am also affiliated with RIKEN Center for Advanced Intelligence Project, as a Visiting Scientist (part-time). I earned my PhD degree from Nanyang Technological University, Singapore. My research focuses on reliable learning and decision making in AI agents, including reinforcement learning, tool use, world models, conversational interaction, and memory. I also study AI security, robustness, and privacy.",
    "text": "I am a Full Professor at PALM Lab, School of Computer Science and Engineering, Southeast University, China. I am also affiliated with RIKEN Center for Advanced Intelligence Project, as a Visiting Scientist (part-time). I earned my PhD degree from Nanyang Technological University, Singapore. My research focuses on reliable learning and decision making in AI agents, including reinforcement learning, tool use, world models, conversational interaction, and memory. I also study AI security, robustness, and privacy."
  },
  "researchThemes": [
    {
      "id": "ai-agents",
      "title": "AI Agents",
      "paragraphs": [
        "I study language model agents that solve tasks through sustained interaction with tools and environments. My work explores long-horizon planning and adaptive tool use, including comparing candidate actions before execution, choosing between atomic tools and composed skills, and learning offline from raw interaction trajectories. I also investigate how agents reuse successful tool transitions and build world models around their own beliefs and unresolved questions, so that past experience and environment knowledge support future decisions.",
        "I investigate conversational agents and controllable user simulators, with a focus on improving multi-turn interaction through alternating adversarial training. This includes detecting and mitigating the exploitation of simulator preferences, and helping training improvements transfer to unfamiliar users and dialogue settings.",
        "Another focus is agent memory: how agents store knowledge, retrieve relevant evidence, and retain experience over time. My work explores retrieval from local token evidence, representations that distinguish similar memories, and continual parametric memory through semantic cues during learning. I also develop evaluations using real repository histories to study when relevant, temporally valid memories help code agents and when past experience misleads their decisions."
      ],
      "sources": [
        {
          "deck": "agent-summary-2026-10-18",
          "slides": [
            8,
            9,
            10,
            11,
            12,
            13
          ]
        },
        {
          "deck": "rl-report-2026-09-03",
          "slides": [
            11,
            12,
            13,
            14,
            15,
            16
          ]
        },
        {
          "publicationIds": [
            32,
            33
          ]
        }
      ],
      "representativeWorks": [
        {
          "publicationId": 1,
          "label": "CITA: Choosing Before Acting",
          "cardLabel": "CITA"
        },
        {
          "title": "CIPO: Counterfactual Imagination Policy Optimization for Adaptive Tool Granularity Selection",
          "label": "CIPO: Adaptive Tool Granularity Selection",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              8
            ]
          },
          "cardLabel": "CIPO",
          "arxiv": {
            "id": "2610.04991",
            "url": "https://arxiv.org/abs/2610.04991",
            "title": "CIPO: Counterfactual Imagination Policy Optimization for Adaptive Tool Granularity Selection",
            "authors": [
              "Yu Li",
              "Yunlu Wan",
              "Zijian Zhu",
              "Han Luo",
              "Chao Ren",
              "Long-Fei Li",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2610.04991",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "publicationId": 5,
          "label": "AgentBrew: Offline Learning from Real-World Trajectories",
          "cardLabel": "AgentBrew"
        },
        {
          "publicationId": 2,
          "label": "PhGPO: Pheromone-Guided Policy Optimization",
          "cardLabel": "PhGPO"
        },
        {
          "publicationId": 6,
          "label": "AAWM: Agent-Authored World Modeling",
          "cardLabel": "AAWM"
        },
        {
          "title": "The Opponent Learns Too: Alternating Adversarial Training for Stronger Conversational Agents",
          "label": "ATOA: Alternating Adversarial Training for Conversational Agents",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              11
            ]
          },
          "cardLabel": "ATOA"
        },
        {
          "title": "Mitigating the Preference Trap of LLM User Simulators in Persuasion Dialogue RL",
          "label": "SimPatch: Mitigating the Preference Trap of User Simulators",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              11
            ]
          },
          "cardLabel": "SimPatch"
        },
        {
          "title": "Beyond the Final Embedding: Retrieving Memories from Token-Level Evidence",
          "label": "Beyond the Final Embedding: Memory Retrieval from Token Evidence",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              12
            ]
          },
          "cardLabel": "Beyond the Final Embedding",
          "arxiv": {
            "id": "2610.13277",
            "url": "https://arxiv.org/abs/2610.13277",
            "title": "Beyond the Final Embedding: Retrieving Memories from Token-Level Evidence",
            "authors": [
              "Han Luo",
              "Zhan Zhuang",
              "Xu He",
              "Jujia Zhao",
              "Yu Li",
              "Suqin Yuan",
              "Dong Li",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2610.13277",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "NEAR: Neighborhood-Aware Residuals for Memory Retrieval",
          "label": "NEAR: Neighborhood-Aware Residuals for Memory Retrieval",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              12
            ]
          },
          "cardLabel": "NEAR",
          "arxiv": {
            "id": "2610.13314",
            "url": "https://arxiv.org/abs/2610.13314",
            "title": "NEAR: Neighborhood-Aware Residuals for Memory Retrieval",
            "authors": [
              "Han Luo",
              "Zhan Zhuang",
              "Xu He",
              "Jujia Zhao",
              "Yu Li",
              "Suqin Yuan",
              "Dong Li",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2610.13314",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "Conditioning the Write: Semantic Cues for Continual Long-Context Parametric Memory",
          "label": "Conditioning the Write: Continual Parametric Memory",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              13
            ]
          },
          "cardLabel": "Conditioning the Write"
        },
        {
          "title": "MemDev-Bench: Does Memory Help Code Agents? Benchmarking Memory Systems over Real Repository Histories",
          "label": "MemDev-Bench: Does Memory Help Code Agents?",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              13
            ]
          },
          "cardLabel": "MemDev-Bench",
          "arxiv": {
            "id": "2610.27524",
            "url": "https://arxiv.org/abs/2610.27524",
            "title": "MemDev-Bench: Does Memory Help Code Agents?Benchmarking Memory Systems over Real Repository Histories",
            "authors": [
              "Guorui Chen",
              "Tao Liu",
              "Zhenzhen Huang",
              "Yidan Zhang",
              "Liyu Jiang",
              "Shuoyuan Wang",
              "Hanchen Sun",
              "Xu He",
              "Dong Li",
              "Yihan Hu",
              "Jianye Hao",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2610.27524",
            "verifiedOn": "2026-10-29"
          }
        }
      ],
      "overview": "I study agents that plan over long interactions, choose tools and reusable skills, and learn from real-world trajectories. My interests include decision-oriented world models, conversational interaction with controllable user simulators, and memory systems that retain experience and retrieve relevant evidence for future tasks.",
      "diagram": "assets/research-agents.svg",
      "diagramAlt": "An AI agent combines memory and a world model to plan, use tools and skills, and interact with users and tasks.",
      "primaryPublicationIds": [
        1,
        5,
        6
      ]
    },
    {
      "id": "agentic-rl",
      "title": "Agentic RL",
      "description": "I develop reinforcement learning methods for agents that interact with environments over many steps. My work studies how to assign sparse outcome rewards to the actions that matter, using historical context, state-transition graphs, and execution dependencies to obtain finer feedback. I also investigate stable policy optimization, phase-aware expert policies, and learning from the joint decisions of collaborating agents.",
      "sources": [
        {
          "deck": "agent-summary-2026-10-18",
          "slides": [
            5,
            6,
            7
          ]
        },
        {
          "deck": "rl-report-2026-09-03",
          "slides": [
            4,
            7,
            8,
            9,
            10,
            16
          ]
        }
      ],
      "representativeWorks": [
        {
          "publicationId": 16,
          "label": "HGPO: Hierarchy-of-Groups Policy Optimization",
          "cardLabel": "HGPO"
        },
        {
          "publicationId": 10,
          "label": "GraphGPO: Graph-Based Credit Assignment",
          "cardLabel": "GraphGPO"
        },
        {
          "publicationId": 9,
          "label": "PA-MoE: Phase-Aware Mixture of Experts",
          "cardLabel": "PA-MoE"
        },
        {
          "title": "Abstract-State Grouping Policy Optimization for CLI Agents",
          "label": "ASGPO: Abstract-State Grouping Policy Optimization",
          "cardLabel": "ASGPO",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              5
            ]
          }
        },
        {
          "title": "Credit Where It Matters: Dependency-Aware Policy Optimization for Terminal Agents",
          "label": "DepGPO: Dependency-Aware Policy Optimization",
          "cardLabel": "DepGPO",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              6
            ]
          },
          "arxiv": {
            "id": "2610.03634",
            "url": "https://arxiv.org/abs/2610.03634",
            "title": "Credit Where It Matters: Dependency-Aware Policy Optimization for Terminal Agents",
            "authors": [
              "Yu Li",
              "Guangfeng Cai",
              "Long-Fei Li",
              "Shuo Han",
              "Shengtian Yang",
              "Han Luo",
              "Kaibing Yang",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2610.03634",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents",
          "label": "SCA: Spatial Credit Assignment for GUI Agents",
          "cardLabel": "SCA",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              6
            ]
          },
          "arxiv": {
            "id": "2609.36939",
            "url": "https://arxiv.org/abs/2609.36939",
            "title": "SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents",
            "authors": [
              "Shengtian Yang",
              "Ziyu Xiong",
              "Kaibing Yang",
              "Guangfeng Cai",
              "Yewen Li",
              "Peng Jiang",
              "Gai Kun",
              "Qingpeng Cai",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2609.36939",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "Online Causal Kalman Filtering for Stable and Effective Policy Optimization",
          "label": "KPO: Stable Policy Optimization with Causal Kalman Filtering",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              7
            ]
          },
          "cardLabel": "KPO",
          "arxiv": {
            "id": "2602.10609",
            "url": "https://arxiv.org/abs/2602.10609",
            "title": "Online Causal Kalman Filtering for Stable and Effective Policy Optimization",
            "authors": [
              "Shuo He",
              "Lang Feng",
              "Xin Cheng",
              "Lei Feng",
              "Bo An"
            ],
            "verificationUrl": "https://arxiv.org/abs/2602.10609",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "SRPO: Setwise Relative Policy Optimization for Multi-Agent Systems",
          "label": "SRPO: Setwise Relative Policy Optimization for Multi-Agent Systems",
          "status": "Manuscript under review",
          "source": {
            "deck": "agent-summary-2026-10-18",
            "slides": [
              6
            ]
          },
          "cardLabel": "SRPO",
          "arxiv": {
            "id": "2609.08452",
            "url": "https://arxiv.org/abs/2609.08452",
            "title": "SRPO: Setwise Relative Policy Optimization for Multi-Agent Systems",
            "authors": [
              "Shengtian Yang",
              "Ziyu Xiong",
              "Yu Li",
              "Yewen Li",
              "Qingpeng Cai",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2609.08452",
            "verifiedOn": "2026-10-29"
          }
        },
        {
          "title": "Learning from All-Failed Groups via First-Visit Coverage in Long-Horizon Agentic Tasks",
          "label": "CovGPO: Coverage-conditioned Group Policy Optimization",
          "cardLabel": "CovGPO",
          "arxiv": {
            "id": "2607.22724",
            "url": "https://arxiv.org/abs/2607.22724",
            "title": "Learning from All-Failed Groups via First-Visit Coverage in Long-Horizon Agentic Tasks",
            "authors": [
              "Kaibing Yang",
              "Guangfeng Cai",
              "Shengtian Yang",
              "Shuo He",
              "Yu Li",
              "Mengyi Liu",
              "Pengwei Chen",
              "Jun Xu",
              "Lei Feng"
            ],
            "verificationUrl": "https://arxiv.org/abs/2607.22724",
            "verifiedOn": "2026-10-31"
          }
        }
      ],
      "overview": "I develop reinforcement learning methods for agents facing sparse rewards and long decision sequences. My work focuses on assigning credit to useful actions, accounting for historical context and execution dependencies, stabilizing policy optimization, and learning from the joint decisions of collaborating agents.",
      "diagram": "assets/research-rl.svg",
      "diagramAlt": "A policy interacts with an environment, generates rollouts, assigns credit to individual steps, and updates through feedback.",
      "primaryPublicationIds": [
        16,
        10,
        9
      ]
    },
    {
      "id": "security",
      "title": "AI Security",
      "description": "I study the security, reliability, robustness, and privacy of AI agents and large language and vision-language models. My work examines how backdoors affect multimodal alignment and compositional understanding, and develops defenses that reduce malicious behavior while preserving useful model capabilities. Broader interests include adversarial robustness and privacy risks in learned models.",
      "sources": [
        {
          "deck": "agent-summary-2026-10-18",
          "slides": [
            2
          ]
        },
        {
          "publicationIds": [
            12,
            25,
            30,
            54
          ]
        },
        {
          "publicationIds": [
            15,
            20,
            21,
            39,
            43,
            54,
            68,
            102,
            113
          ]
        },
        {
          "publicationIds": [
            28
          ]
        }
      ],
      "representativeWorks": [
        {
          "publicationId": 12,
          "label": "TokenSwap: Backdoors in Compositional Understanding",
          "cardLabel": "TokenSwap"
        },
        {
          "publicationId": 25,
          "label": "Repulsive Visual Prompt Tuning for Backdoor Defense",
          "cardLabel": "Repulsive prompt tuning"
        },
        {
          "publicationId": 30,
          "label": "A Closer Look at Backdoor Attacks on CLIP",
          "cardLabel": "A Closer Look at CLIP"
        },
        {
          "publicationId": 15,
          "label": "Test-Time Attention Purification",
          "cardLabel": "Attention purification"
        },
        {
          "publicationId": 21,
          "label": "Targeted Adversarial Attacks on Multimodal Models",
          "cardLabel": "Multimodal adversarial attacks"
        },
        {
          "title": "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills",
          "label": "AntiSkillBench: Privacy and impersonation risks in persona skills",
          "cardLabel": "AntiSkillBench",
          "arxiv": {
            "id": "2608.03700",
            "url": "https://arxiv.org/abs/2608.03700",
            "title": "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills",
            "authors": [
              "Yongli Xiang",
              "Zhifang Zhang",
              "Bojun Yang",
              "Ziming Hong",
              "Lei Feng",
              "Miao Xu",
              "Tongliang Liu"
            ],
            "verificationUrl": "https://arxiv.org/abs/2608.03700",
            "verifiedOn": "2026-10-31"
          }
        },
        {
          "title": "When Collaboration Becomes a Trigger: Collective Evidence-Threshold Backdoors in Multi-Agent Systems",
          "label": "BCBI & LATTE: Collective backdoor attacks and defenses",
          "cardLabel": "BCBI & LATTE",
          "arxiv": {
            "id": "2608.01085",
            "url": "https://arxiv.org/abs/2608.01085",
            "title": "When Collaboration Becomes a Trigger: Collective Evidence-Threshold Backdoors in Multi-Agent Systems",
            "authors": [
              "Jia-Hao Xiao",
              "Lei Feng",
              "Min-Ling Zhang"
            ],
            "verificationUrl": "https://arxiv.org/abs/2608.01085",
            "verifiedOn": "2026-10-31"
          }
        }
      ],
      "overview": "I study the security, reliability, robustness, and privacy of AI agents and language and vision-language models. My work examines backdoors in multimodal alignment and compositional understanding, and develops defenses that preserve useful capabilities. I also investigate adversarial robustness and privacy risks.",
      "diagram": "assets/research-security.svg",
      "diagramAlt": "Backdoor and adversarial attacks target an AI model, while detection, robustness, and privacy defenses protect the system.",
      "primaryPublicationIds": [
        12,
        25,
        30
      ]
    }
  ],
  "publications": [
    {
      "title": "Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents.",
      "authorsHtml": "Yu Li, Zheng Zhang, Xin Liu, Shengtian Yang, Guangfeng Cai, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2610.02330",
      "noteHtml": "",
      "sourceIndex": 1,
      "sourceHtml": "Yu Li, Zheng Zhang, Xin Liu, Shengtian Yang, Guangfeng Cai, <b>Lei Feng*</b>. <br/> <a href=\"\">Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents.</a><br/> <i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026."
    },
    {
      "title": "PhGPO: Pheromone-Guided Policy Optimization for Long-Horizon Tool Planning.",
      "authorsHtml": "Yu Li, Guangfeng Cai, Shengtian Yang, Han Luo, Shuo Han, Xu He, Dong Li, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2602.13691",
      "noteHtml": "",
      "sourceIndex": 2,
      "sourceHtml": "Yu Li, Guangfeng Cai, Shengtian Yang, Han Luo, Shuo Han, Xu He, Dong Li, <b>Lei Feng*</b>. <br/> <a href=\"https://arxiv.org/abs/2602.13691\">PhGPO: Pheromone-Guided Policy Optimization for Long-Horizon Tool Planning.</a><br/> <i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026."
    },
    {
      "title": "Understanding and Mitigating Under-Confidence in GNNs from the Final Layer.",
      "authorsHtml": "Jincheng Huang, Jie Xu, Ping Hu, Xiaoshuang Shi, <b>Lei Feng*</b>, Xiaofeng Zhu*.",
      "venueHtml": "<i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2505.11335",
      "noteHtml": "",
      "sourceIndex": 3,
      "sourceHtml": "Jincheng Huang, Jie Xu, Ping Hu, Xiaoshuang Shi, <b>Lei Feng*</b>, Xiaofeng Zhu*. <br/> <a href=\"\">Understanding and Mitigating Under-Confidence in GNNs from the Final Layer.</a><br/> <i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026."
    },
    {
      "title": "Permute-then-Adapt: Weak-to-Strong Contrastive Image-Text Adaptation.",
      "authorsHtml": "Jinhao Li, Sarah Erfani, <b>Lei Feng</b>, Guangrui Li, James Bailey, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://neurips.cc/virtual/2026/poster/150368",
      "noteHtml": "(Spotlight)",
      "sourceIndex": 4,
      "sourceHtml": "Jinhao Li, Sarah Erfani, <b>Lei Feng</b>, Guangrui Li, James Bailey, Feng Liu. <br/> <a href=\"\">Permute-then-Adapt: Weak-to-Strong Contrastive Image-Text Adaptation.</a><br/> <i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.<br/> (Spotlight)"
    },
    {
      "title": "AgentBrew: Offline Tool-Use Agent Learning from Raw Real-World Trajectories.",
      "authorsHtml": "Zhiyi Lyu, Yewen Li, Longtao Zheng, Shengtian Yang, Lang Feng, <b>Lei Feng</b>, Peng Jiang, Kun Gai, Qingpeng Cai, Bo An.",
      "venueHtml": "<i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2609.05837",
      "noteHtml": "",
      "sourceIndex": 5,
      "sourceHtml": "Zhiyi Lyu, Yewen Li, Longtao Zheng, Shengtian Yang, Lang Feng, <b>Lei Feng</b>, Peng Jiang, Kun Gai, Qingpeng Cai, Bo An. <br/> <a href=\"\">AgentBrew: Offline Tool-Use Agent Learning from Raw Real-World Trajectories.</a><br/> <i>Proceedings of the 40th Conference on Neural Information Processing Systems (<b>NeurIPS'26</b>)</i>, 2026."
    },
    {
      "title": "Beyond Next-Observation Prediction: Agent-Authored World Modeling for Sequential Decision Making.",
      "authorsHtml": "Guangfeng Cai, Kaibing Yang, Shuo He, Yu Li, Shengtian Yang, Jiaqi Lv, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2606.25421",
      "noteHtml": "(SAC Highlight Award)",
      "sourceIndex": 6,
      "sourceHtml": "Guangfeng Cai, Kaibing Yang, Shuo He, Yu Li, Shengtian Yang, Jiaqi Lv, <b>Lei Feng*</b>. <br/> <a href=\"https://arxiv.org/abs/2606.25421\">Beyond Next-Observation Prediction: Agent-Authored World Modeling for Sequential Decision Making.</a><br/> <i>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'26</b>)</i>, 2026."
    },
    {
      "title": "Generation-Gated Cascaded Routing for Large Language Models.",
      "authorsHtml": "Yanqiu Xu, Han Luo, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://aclanthology.org/2026.emnlp-main.2071/",
      "noteHtml": "(Oral)",
      "sourceIndex": 7,
      "sourceHtml": "Yanqiu Xu, Han Luo, <b>Lei Feng*</b>. <br/> <a href=\"\">Generation-Gated Cascaded Routing for Large Language Models.</a><br/> <i>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'26</b>)</i>, 2026.<br/> (Oral)"
    },
    {
      "title": "PlatformBid: An Auto-Bidding Benchmark from a Unified Advertising Platform's Perspective.",
      "authorsHtml": "Shengtian Yang, Yewen Li, Peng Jiang, Zhiyi Lyu, Bo An, Peng Jiang, Qingpeng Cai*, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data (<b>KDD'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2607.27265",
      "noteHtml": "",
      "sourceIndex": 8,
      "sourceHtml": "Shengtian Yang, Yewen Li, Peng Jiang, Zhiyi Lyu, Bo An, Peng Jiang, Qingpeng Cai*, <b>Lei Feng*</b>. <br/> <a href=\"\">PlatformBid: An Auto-Bidding Benchmark from a Unified Advertising Platform's Perspective.</a><br/> <i>Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data (<b>KDD'26</b>)</i>, 2026."
    },
    {
      "title": "Phase-Aware Mixture of Experts for Agentic Reinforcement Learning.",
      "authorsHtml": "Shengtian Yang, Yu Li, Shuo He, Yewen Li, Qingpeng Cai, Peng Jiang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2602.17038",
      "noteHtml": "",
      "sourceIndex": 9,
      "sourceHtml": "Shengtian Yang, Yu Li, Shuo He, Yewen Li, Qingpeng Cai, Peng Jiang, <b>Lei Feng*</b>. <br/> <a href=\"\">Phase-Aware Mixture of Experts for Agentic Reinforcement Learning.</a><br/> <i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026."
    },
    {
      "title": "Beyond Trajectory-Level Attribution: Graph-Based Credit Assignment for Agentic Reinforcement Learning.",
      "authorsHtml": "Xin Cheng, Shuo He, Lang Feng, Haiyang Xu, Ming Yan, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2605.26684",
      "noteHtml": "",
      "sourceIndex": 10,
      "sourceHtml": "Xin Cheng, Shuo He, Lang Feng, Haiyang Xu, Ming Yan, <b>Lei Feng*</b>, Bo An. <br/> <a href=\"\">Beyond Trajectory-Level Attribution: Graph-Based Credit Assignment for Agentic Reinforcement Learning.</a><br/> <i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026."
    },
    {
      "title": "When More Experts Hurt: Underfitting in Multi-Expert Learning to Defer.",
      "authorsHtml": "Shuqi Liu, Yuzhou Cao, <b>Lei Feng</b>, Bo An, Luke Ong.",
      "venueHtml": "<i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2602.17144",
      "noteHtml": "",
      "sourceIndex": 11,
      "sourceHtml": "Shuqi Liu, Yuzhou Cao, <b>Lei Feng</b>, Bo An, Luke Ong. <br/> <a href=\"\">When More Experts Hurt: Underfitting in Multi-Expert Learning to Defer.</a><br/> <i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026."
    },
    {
      "title": "TokenSwap: Backdoor Attack on the Compositional Understanding of Large Vision-Language Models.",
      "authorsHtml": "Zhifang Zhang, Qiqi Tao, Jiaqi Lv, Na Zhao, <b>Lei Feng*</b>, Joey Tianyi Zhou.",
      "venueHtml": "<i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2509.24566",
      "noteHtml": "",
      "sourceIndex": 12,
      "sourceHtml": "Zhifang Zhang, Qiqi Tao, Jiaqi Lv, Na Zhao, <b>Lei Feng*</b>, Joey Tianyi Zhou. <br/> <a href=\"\">TokenSwap: Backdoor Attack on the Compositional Understanding of Large Vision-Language Models.</a><br/> <i>Proceedings of the 43rd International Conference on Machine Learning (<b>ICML'26</b>)</i>, 2026."
    },
    {
      "title": "Long-Tailed Out-of-Distribution Detection with Refined Separate Class Learning.",
      "authorsHtml": "Shuai Feng, Yuxin Ge, Baoming Zhang, Yuntao Du, Mingcai Chen, Chongjun Wang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26-Findings</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2509.17034",
      "noteHtml": "",
      "sourceIndex": 13,
      "sourceHtml": "Shuai Feng, Yuxin Ge, Baoming Zhang, Yuntao Du, Mingcai Chen, Chongjun Wang, <b>Lei Feng*</b>. <br/> <a href=\"\">Long-Tailed Out-of-Distribution Detection with Refined Separate Class Learning.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26-Findings</b>)</i>, 2026."
    },
    {
      "title": "Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Model.",
      "authorsHtml": "Zhiming Liu, Yujie Wei, <b>Lei Feng</b>, Xiu Su, Xiaobo Xia, Weili Guan, Zeke Xie, Shuo Yang.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26-Findings</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2602.01167",
      "noteHtml": "",
      "sourceIndex": 14,
      "sourceHtml": "Zhiming Liu, Yujie Wei, <b>Lei Feng</b>, Xiu Su, Xiaobo Xia, Weili Guan, Zeke Xie, Shuo Yang. <br/> <a href=\"\">Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Model.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26-Findings</b>)</i>, 2026."
    },
    {
      "title": "Test-Time Attention Purification for Backdoored Large Vision Language Models.",
      "authorsHtml": "Zhifang Zhang, Bojun Yang, Shuo He, Weitong Chen, Wei Emma Zhang, Olaf Maennel, <b>Lei Feng*</b>, Miao Xu*.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2603.12989",
      "noteHtml": "",
      "sourceIndex": 15,
      "sourceHtml": "Zhifang Zhang, Bojun Yang, Shuo He, Weitong Chen, Wei Emma Zhang, Olaf Maennel, <b>Lei Feng*</b>, Miao Xu*. <br/> <a href=\"\">Test-Time Attention Purification for Backdoored Large Vision Language Models.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'26</b>)</i>, 2026."
    },
    {
      "title": "Hierarchy-of-Groups Policy Optimization for Long-Horizon Agentic Tasks.",
      "authorsHtml": "Shuo He, Lang Feng, Qi Wei, Xin Cheng, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://openreview.net/pdf?id=T8Dev99qnz",
      "noteHtml": "",
      "sourceIndex": 16,
      "sourceHtml": "Shuo He, Lang Feng, Qi Wei, Xin Cheng, <b>Lei Feng*</b>, Bo An. <br/> <a href=\"https://openreview.net/pdf?id=T8Dev99qnz\">Hierarchy-of-Groups Policy Optimization for Long-Horizon Agentic Tasks.</a><br/> <i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026."
    },
    {
      "title": "Mitigating Mismatch within Reference-based Preference Optimization.",
      "authorsHtml": "Suqin Yuan, Xingrui Yu, Jiyang Zheng, <b>Lei Feng*</b>, Dadong Wang, Ivor Tsang, Tongliang Liu*.",
      "venueHtml": "<i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://openreview.net/pdf?id=k79Un1LSXy",
      "noteHtml": "",
      "sourceIndex": 17,
      "sourceHtml": "Suqin Yuan, Xingrui Yu, Jiyang Zheng, <b>Lei Feng*</b>, Dadong Wang, Ivor Tsang, Tongliang Liu*. <br/> <a href=\"https://openreview.net/pdf?id=k79Un1LSXy\">Mitigating Mismatch within Reference-based Preference Optimization.</a><br/> <i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026."
    },
    {
      "title": "Revisiting Confidence Calibration for Misclassification Detection in VLMs.",
      "authorsHtml": "Jincheng Huang, Jie Xu, Xiaoshuang Shi, Ping Hu, <b>Lei Feng*</b>, Xiaofeng Zhu*.",
      "venueHtml": "<i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://openreview.net/pdf?id=d8WMoi571f",
      "noteHtml": "",
      "sourceIndex": 18,
      "sourceHtml": "Jincheng Huang, Jie Xu, Xiaoshuang Shi, Ping Hu, <b>Lei Feng*</b>, Xiaofeng Zhu*. <br/> <a href=\"https://openreview.net/pdf?id=d8WMoi571f\">Revisiting Confidence Calibration for Misclassification Detection in VLMs.</a><br/> <i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026."
    },
    {
      "title": "CARPRT: Class-Aware Zero-Shot Prompt Reweighting for Vision-Language Models.",
      "authorsHtml": "Ruijiang Dong, Zesheng Ye, Feng Liu, Jianzhong Qi, <b>Lei Feng</b>, Gang Niu, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://openreview.net/pdf?id=AScQDQqVXY",
      "noteHtml": "",
      "sourceIndex": 19,
      "sourceHtml": "Ruijiang Dong, Zesheng Ye, Feng Liu, Jianzhong Qi, <b>Lei Feng</b>, Gang Niu, Masashi Sugiyama. <br/> <a href=\"https://openreview.net/pdf?id=AScQDQqVXY\">CARPRT: Class-Aware Zero-Shot Prompt Reweighting for Vision-Language Models.</a><br/> <i>Proceedings of the 14th International Conference on Learning Representations (<b>ICLR'26</b>)</i>, 2026."
    },
    {
      "title": "An Invariant Latent Space Perspective on Language Model Inversion.",
      "authorsHtml": "Wentao Ye, Jiaqi Hu, Haobo Wang, Xinpeng Ti, Zhiqing Xiao, Hao Chen, Liyao Li, <b>Lei Feng</b>, Sai Wu, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the 40th AAAI Conference on Artificial Intelligence (<b>AAAI'26</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://arxiv.org/abs/2511.19569",
      "noteHtml": "",
      "sourceIndex": 20,
      "sourceHtml": "Wentao Ye, Jiaqi Hu, Haobo Wang, Xinpeng Ti, Zhiqing Xiao, Hao Chen, Liyao Li, <b>Lei Feng</b>, Sai Wu, Junbo Zhao. <br/> <a href=\"\">An Invariant Latent Space Perspective on Language Model Inversion.</a><br/> <i>Proceedings of the 40th AAAI Conference on Artificial Intelligence (<b>AAAI'26</b>)</i>, 2026."
    },
    {
      "title": "Improving Generalizability and Undetectability for Targeted Adversarial Attacks on Multimodal Pre-trained Models.",
      "authorsHtml": "Zhifang Zhang, Jiahan Zhang, Shengjie Zhou, Qi Wei, Shuo He, Feng Liu, <b>Lei Feng*</b>.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://ieeexplore.ieee.org/document/11676246/",
      "noteHtml": "",
      "sourceIndex": 21,
      "sourceHtml": "Zhifang Zhang, Jiahan Zhang, Shengjie Zhou, Qi Wei, Shuo He, Feng Liu, <b>Lei Feng*</b>. <br/> <a href=\"https://ieeexplore.ieee.org/document/11676246/\">Improving Generalizability and Undetectability for Targeted Adversarial Attacks on Multimodal Pre-trained Models.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026."
    },
    {
      "title": "Early Stopping Without Validation Data in Weakly Supervised Learning.",
      "authorsHtml": "Suqin Yuan, Muyang Li, <b>Lei Feng*</b>, Bo Han, Gang Niu, Masashi Sugiyama, Tongliang Liu.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://ieeexplore.ieee.org/document/11604166/",
      "noteHtml": "",
      "sourceIndex": 22,
      "sourceHtml": "Suqin Yuan, Muyang Li, <b>Lei Feng*</b>, Bo Han, Gang Niu, Masashi Sugiyama, Tongliang Liu. <br/> <a href=\"https://ieeexplore.ieee.org/document/11604166/\">Early Stopping Without Validation Data in Weakly Supervised Learning.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026."
    },
    {
      "title": "Instance-dependent Early Stopping for Adaptive Data Pruning.",
      "authorsHtml": "Suqin Yuan, Runqi Lin, Felix Azian, <b>Lei Feng*</b>, Bo Han, Gang Niu, Masashi Sugiyama, Tongliang Liu*.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://ieeexplore.ieee.org/document/11517544",
      "noteHtml": "",
      "sourceIndex": 23,
      "sourceHtml": "Suqin Yuan, Runqi Lin, Felix Azian, <b>Lei Feng*</b>, Bo Han, Gang Niu, Masashi Sugiyama, Tongliang Liu*. <br/> <a href=\"https://ieeexplore.ieee.org/document/11517544\">Instance-dependent Early Stopping for Adaptive Data Pruning.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, 2026."
    },
    {
      "title": "Renewable Energy-Driven Green Electricity Supplement for Empowering Blue Economy.",
      "authorsHtml": "Ruibo Fan, Kai Feng, Tiankai Zhang*, Heng Wu*, <b>Lei Feng*</b>, Xiangzhou Yuan*.",
      "venueHtml": "<i>Sustainable Materials (<b>SusMat</b>)</i>, 2026.",
      "year": 2026,
      "url": "https://doi.org/10.1002/sus2.70073",
      "noteHtml": "",
      "sourceIndex": 24,
      "sourceHtml": "Ruibo Fan, Kai Feng, Tiankai Zhang*, Heng Wu*, <b>Lei Feng*</b>, Xiangzhou Yuan*. <br/> <a href=\"https://doi.org/10.1002/sus2.70073\">Renewable Energy-Driven Green Electricity Supplement for Empowering Blue Economy.</a><br/> <i>Sustainable Materials (<b>SusMat</b>)</i>, 2026."
    },
    {
      "title": "Defending Multimodal Backdoored Models by Repulsive Visual Prompt Tuning.",
      "authorsHtml": "Zhifang Zhang, Shuo He*, Haobo Wang, Bingquan Shen, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=KkONOZwvSU",
      "noteHtml": "",
      "sourceIndex": 25,
      "sourceHtml": "Zhifang Zhang, Shuo He*, Haobo Wang, Bingquan Shen, <b>Lei Feng*</b>. <br/> <a href=\"https://openreview.net/pdf?id=KkONOZwvSU\">Defending Multimodal Backdoored Models by Repulsive Visual Prompt Tuning.</a><br/> <i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025."
    },
    {
      "title": "Enhancing Sample Selection Against Label Noise by Cutting Mislabeled Easy Examples.",
      "authorsHtml": "Suqin Yuan, <b>Lei Feng*</b>, Bo Han, Tongliang Liu*.",
      "venueHtml": "<i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=OfIUAlo2hJ",
      "noteHtml": "",
      "sourceIndex": 26,
      "sourceHtml": "Suqin Yuan, <b>Lei Feng*</b>, Bo Han, Tongliang Liu*. <br/> <a href=\"https://openreview.net/pdf?id=OfIUAlo2hJ\">Enhancing Sample Selection Against Label Noise by Cutting Mislabeled Easy Examples.</a><br/> <i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025."
    },
    {
      "title": "Establishing Linear Surrogate Regret Bounds for Convex Smooth Losses via Convolutional Fenchel–Young Losses.",
      "authorsHtml": "Yuzhou Cao, Han Bao, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=A4Xx9irvpp",
      "noteHtml": "(Spotlight, Acceptance Rate: 3.19%)",
      "sourceIndex": 27,
      "sourceHtml": "Yuzhou Cao, Han Bao, <b>Lei Feng*</b>, Bo An. <br/> <a href=\"https://openreview.net/pdf?id=A4Xx9irvpp\">Establishing Linear Surrogate Regret Bounds for Convex Smooth Losses via Convolutional Fenchel–Young Losses.</a><br/> <i>Proceedings of the 39th Conference on Neural Information Processing Systems (<b>NeurIPS'25</b>)</i>, 2025.<br/> (Spotlight, Acceptance Rate: 3.19%)"
    },
    {
      "title": "Towards Reverse Engineering of Language Models: A Survey.",
      "authorsHtml": "Xinpeng Ti, Wentao Ye, Zhifang Zhang, Junbo Zhao, Chang Yao, <b>Lei Feng*</b>, Haobo Wang*.",
      "venueHtml": "<i>Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'25-Findings</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://aclanthology.org/2025.findings-emnlp.395/",
      "noteHtml": "",
      "sourceIndex": 28,
      "sourceHtml": "Xinpeng Ti, Wentao Ye, Zhifang Zhang, Junbo Zhao, Chang Yao, <b>Lei Feng*</b>, Haobo Wang*. <br/> <a href=\"https://aclanthology.org/2025.findings-emnlp.395/\">Towards Reverse Engineering of Language Models: A Survey.</a><br/> <i>Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (<b>EMNLP'25-Findings</b>)</i>, 2025."
    },
    {
      "title": "Dual-Head Knowledge Distillation: Enhancing Logits Utilization with an Auxiliary Head.",
      "authorsHtml": "Penghui Yang, Chen-Chen Zong, Sheng-Jun Huang, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data (<b>KDD'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://dl.acm.org/doi/10.1145/3711896.3736915",
      "noteHtml": "",
      "sourceIndex": 29,
      "sourceHtml": "Penghui Yang, Chen-Chen Zong, Sheng-Jun Huang, <b>Lei Feng*</b>, Bo An. <br/> <a href=\"https://dl.acm.org/doi/10.1145/3711896.3736915\">Dual-Head Knowledge Distillation: Enhancing Logits Utilization with an Auxiliary Head.</a><br/> <i>Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data (<b>KDD'25</b>)</i>, 2025."
    },
    {
      "title": "A Closer Look at Backdoor Attacks on CLIP.",
      "authorsHtml": "Shuo He, Zhifang Zhang, Feng Liu, Roy Ka-Wei Lee, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=DWCDyGl6k8",
      "noteHtml": "",
      "sourceIndex": 30,
      "sourceHtml": "Shuo He, Zhifang Zhang, Feng Liu, Roy Ka-Wei Lee, Bo An, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=DWCDyGl6k8\">A Closer Look at Backdoor Attacks on CLIP.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Test-Time Multimodal Backdoor Detection by Contrastive Prompting.",
      "authorsHtml": "Yuwei Niu, Shuo He, Qi Wei, Zongyu Wu, Feng Liu, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=1jd25AlvHS",
      "noteHtml": "",
      "sourceIndex": 31,
      "sourceHtml": "Yuwei Niu, Shuo He, Qi Wei, Zongyu Wu, Feng Liu, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=1jd25AlvHS\">Test-Time Multimodal Backdoor Detection by Contrastive Prompting.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models.",
      "authorsHtml": "Xin Cheng, Jiabo Ye, Haiyang Xu, Ming Yan, Ji Zhang, Feng Liu, Fei Huang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=6udKBHc0Mr",
      "noteHtml": "",
      "sourceIndex": 32,
      "sourceHtml": "Xin Cheng, Jiabo Ye, Haiyang Xu, Ming Yan, Ji Zhang, Feng Liu, Fei Huang, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=6udKBHc0Mr\">Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Rethinking Chain-of-Thought from the Perspective of Self-Training.",
      "authorsHtml": "Zongqian Wu, Baoduo Xu, Ruochen Cui, Mengmeng Zhan, Xiaofeng Zhu*, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=ksdPdnwKGi",
      "noteHtml": "",
      "sourceIndex": 33,
      "sourceHtml": "Zongqian Wu, Baoduo Xu, Ruochen Cui, Mengmeng Zhan, Xiaofeng Zhu*, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=ksdPdnwKGi\">Rethinking Chain-of-Thought from the Perspective of Self-Training.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Representation Surgery in Model Merging with Probabilistic Modeling.",
      "authorsHtml": "Qi Wei, Shuo He, Enneng Yang, Tingcong Liu, Haobo Wang, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=a02CH43z1G",
      "noteHtml": "",
      "sourceIndex": 34,
      "sourceHtml": "Qi Wei, Shuo He, Enneng Yang, Tingcong Liu, Haobo Wang, <b>Lei Feng*</b>, Bo An.<br/> <a href=\"https://openreview.net/pdf?id=a02CH43z1G\">Representation Surgery in Model Merging with Probabilistic Modeling.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Understanding Model Reprogramming for CLIP via Decoupling Visual Prompts.",
      "authorsHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=Ne5brB1tKN",
      "noteHtml": "",
      "sourceIndex": 35,
      "sourceHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.<br/> <a href=\"https://openreview.net/pdf?id=Ne5brB1tKN\">Understanding Model Reprogramming for CLIP via Decoupling Visual Prompts.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Enhancing the Influence of Labels on Unlabeled Nodes in Graph Convolutional Networks.",
      "authorsHtml": "Jincheng Huang, Yujie Mo, Xiaoshuang Shi, <b>Lei Feng</b>, Xiaofeng Zhu.",
      "venueHtml": "<i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/pdf?id=afhPCaIRrh",
      "noteHtml": "",
      "sourceIndex": 36,
      "sourceHtml": "Jincheng Huang, Yujie Mo, Xiaoshuang Shi, <b>Lei Feng</b>, Xiaofeng Zhu.<br/> <a href=\"https://openreview.net/pdf?id=afhPCaIRrh\">Enhancing the Influence of Labels on Unlabeled Nodes in Graph Convolutional Networks.</a><br/> <i>Proceedings of the 42nd International Conference on Machine Learning (<b>ICML'25</b>)</i>, 2025."
    },
    {
      "title": "Towards Robust Incremental Learning under Ambiguous Supervision.",
      "authorsHtml": "Rui Wang, Mingxuan Xia, Haobo Wang, <b>Lei Feng</b>, Junbo Zhao, Gang Chen, Chang Yao.",
      "venueHtml": "<i>Proceedings of the 34th International Joint Conference on Artificial Intelligence (<b>IJCAI'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://www.ijcai.org/proceedings/2025/0712.pdf",
      "noteHtml": "",
      "sourceIndex": 37,
      "sourceHtml": "Rui Wang, Mingxuan Xia, Haobo Wang, <b>Lei Feng</b>, Junbo Zhao, Gang Chen, Chang Yao.<br/> <a href=\"https://www.ijcai.org/proceedings/2025/0712.pdf\">Towards Robust Incremental Learning under Ambiguous Supervision.</a><br/> <i>Proceedings of the 34th International Joint Conference on Artificial Intelligence (<b>IJCAI'25</b>)</i>, 2025."
    },
    {
      "title": "Prototype-based Optimal Transport for Out-of-Distribution Detection.",
      "authorsHtml": "Ao Ke, Wenlong Chen, Chuanwen Feng, Yukun Cao, Xike Xie, Kevin Zhou, <b>Lei Feng</b>.",
      "venueHtml": "<i>Proceedings of the 34th International Joint Conference on Artificial Intelligence (<b>IJCAI'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://www.ijcai.org/proceedings/2025/0336.pdf",
      "noteHtml": "",
      "sourceIndex": 38,
      "sourceHtml": "Ao Ke, Wenlong Chen, Chuanwen Feng, Yukun Cao, Xike Xie, Kevin Zhou, <b>Lei Feng</b>.<br/> <a href=\"https://www.ijcai.org/proceedings/2025/0336.pdf\">Prototype-based Optimal Transport for Out-of-Distribution Detection.</a><br/> <i>Proceedings of the 34th International Joint Conference on Artificial Intelligence (<b>IJCAI'25</b>)</i>, 2025."
    },
    {
      "title": "Endowing Visual Reprogramming with Adversarial Robustness.",
      "authorsHtml": "Shengjie Zhou, Xin Cheng, Haiyang Xu, Ming Yan, Tao Xiang, Feng Liu, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/forum?id=OuLgaHEmzi",
      "noteHtml": "",
      "sourceIndex": 39,
      "sourceHtml": "Shengjie Zhou, Xin Cheng, Haiyang Xu, Ming Yan, Tao Xiang, Feng Liu, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/forum?id=OuLgaHEmzi\">Endowing Visual Reprogramming with Adversarial Robustness.</a><br/> <i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025."
    },
    {
      "title": "Instance-dependent Early Stopping.",
      "authorsHtml": "Suqin Yuan, Runqi Lin, <b>Lei Feng*</b>, Bo Han, Tongliang Liu*.",
      "venueHtml": "<i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/forum?id=P42DbV2nuV",
      "noteHtml": "",
      "sourceIndex": 40,
      "sourceHtml": "Suqin Yuan, Runqi Lin, <b>Lei Feng*</b>, Bo Han, Tongliang Liu*.<br/> <a href=\"https://openreview.net/forum?id=P42DbV2nuV\">Instance-dependent Early Stopping.</a><br/> <i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025."
    },
    {
      "title": "Attribute-based Visual Reprogramming for Vision-Language Models.",
      "authorsHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/forum?id=j964C6y92q",
      "noteHtml": "",
      "sourceIndex": 41,
      "sourceHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.<br/> <a href=\"https://openreview.net/forum?id=j964C6y92q\">Attribute-based Visual Reprogramming for Vision-Language Models.</a><br/> <i>Proceedings of the 13th International Conference on Learning Representations (<b>ICLR'25</b>)</i>, 2025."
    },
    {
      "title": "Improving Generalization of Deep Neural Networks by Optimum Shifting.",
      "authorsHtml": "Yuyan Zhou, Ye Li, <b>Lei Feng</b>, Sheng-Jun Huang.",
      "venueHtml": "<i>Proceedings of the 39th AAAI Conference on Artificial Intelligence (<b>AAAI'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://ojs.aaai.org/index.php/AAAI/article/view/33181",
      "noteHtml": "",
      "sourceIndex": 42,
      "sourceHtml": "Yuyan Zhou, Ye Li, <b>Lei Feng</b>, Sheng-Jun Huang.<br/> <a href=\"https://ojs.aaai.org/index.php/AAAI/article/view/33181\">Improving Generalization of Deep Neural Networks by Optimum Shifting.</a><br/> <i>Proceedings of the 39th AAAI Conference on Artificial Intelligence (<b>AAAI'25</b>)</i>, 2025."
    },
    {
      "title": "Influence-Based Fair Selection for Sample-Discriminative Backdoor Attack.",
      "authorsHtml": "Qi Wei, Shuo He, Jiahan Zhang, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 39th AAAI Conference on Artificial Intelligence (<b>AAAI'25</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://ojs.aaai.org/index.php/AAAI/article/view/35449",
      "noteHtml": "",
      "sourceIndex": 43,
      "sourceHtml": "Qi Wei, Shuo He, Jiahan Zhang, <b>Lei Feng*</b>, Bo An.<br/> <a href=\"https://ojs.aaai.org/index.php/AAAI/article/view/35449\">Influence-Based Fair Selection for Sample-Discriminative Backdoor Attack.</a><br/> <i>Proceedings of the 39th AAAI Conference on Artificial Intelligence (<b>AAAI'25</b>)</i>, 2025."
    },
    {
      "title": "Weakly Supervised Battery SOH Estimation with Imprecise Intervals.",
      "authorsHtml": "Tianjing Wang, Chao Ren, Zhao Yang Dong, <b>Lei Feng</b>.",
      "venueHtml": "<i>IEEE Transactions on Energy Conversion (<b>TEC</b>)</i>, vol. 40, no. 3, pp. 1841-1855, 2025.",
      "year": 2025,
      "url": "https://doi.org/10.1109/TEC.2025.3535522",
      "noteHtml": "",
      "sourceIndex": 44,
      "sourceHtml": "Tianjing Wang, Chao Ren, Zhao Yang Dong, <b>Lei Feng</b>. <br/> <a href=\"https://doi.org/10.1109/TEC.2025.3535522\">Weakly Supervised Battery SOH Estimation with Imprecise Intervals.</a><br/> <i>IEEE Transactions on Energy Conversion (<b>TEC</b>)</i>, vol. 40, no. 3, pp. 1841-1855, 2025."
    },
    {
      "title": "IRNet: Iterative Refinement Network for Noisy Partial Label Learning.",
      "authorsHtml": "Zheng Lian, Mingyu Xu, Lan Chen, Licai Sun, Bin Liu, <b>Lei Feng</b>, Jianhua Tao.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2025.",
      "year": 2025,
      "url": "https://arxiv.org/abs/2211.04774",
      "noteHtml": "",
      "sourceIndex": 45,
      "sourceHtml": "Zheng Lian, Mingyu Xu, Lan Chen, Licai Sun, Bin Liu, <b>Lei Feng</b>, Jianhua Tao.<br/> <a href=\"\">IRNet: Iterative Refinement Network for Noisy Partial Label Learning.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2025."
    },
    {
      "title": "Does Confidence Calibration Improve Conformal Prediction?",
      "authorsHtml": "HuaJun Xi, Jianguo Huang, Kangdao Liu, <b>Lei Feng</b>, Hongxin Wei.",
      "venueHtml": "<i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/forum?id=6DDaTwTvdE",
      "noteHtml": "",
      "sourceIndex": 46,
      "sourceHtml": "HuaJun Xi, Jianguo Huang, Kangdao Liu, <b>Lei Feng</b>, Hongxin Wei.<br/> <a href=\"https://openreview.net/forum?id=6DDaTwTvdE\">Does Confidence Calibration Improve Conformal Prediction?</a><br/> <i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2025."
    },
    {
      "title": "Exploring Weak-to-Strong Generalization for CLIP-based Classification.",
      "authorsHtml": "Jinhao Li, Sarah Monazam Erfani, <b>Lei Feng</b>, James Bailey, Feng Liu.",
      "venueHtml": "<i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2025.",
      "year": 2025,
      "url": "https://openreview.net/forum?id=quE8gDDegf",
      "noteHtml": "",
      "sourceIndex": 47,
      "sourceHtml": "Jinhao Li, Sarah Monazam Erfani, <b>Lei Feng</b>, James Bailey, Feng Liu.<br/> <a href=\"https://openreview.net/forum?id=quE8gDDegf\">Exploring Weak-to-Strong Generalization for CLIP-based Classification.</a><br/> <i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2025."
    },
    {
      "title": "Variational Rectification Inference for Learning with Noisy Labels.",
      "authorsHtml": "Haoliang Sun, Qi Wei, <b>Lei Feng</b>, Yupeng Hu, Fan Liu, Hehe Fan, Yilong Yin.",
      "venueHtml": "<i>International Journal of Computer Vision (<b>IJCV</b>)</i>, vol. 133, pp. 652–671, 2025.",
      "year": 2025,
      "url": "https://link.springer.com/article/10.1007/s11263-024-02205-5",
      "noteHtml": "",
      "sourceIndex": 48,
      "sourceHtml": "Haoliang Sun, Qi Wei, <b>Lei Feng</b>, Yupeng Hu, Fan Liu, Hehe Fan, Yilong Yin. <br/> <a href=\"https://link.springer.com/article/10.1007/s11263-024-02205-5\">Variational Rectification Inference for Learning with Noisy Labels.</a><br/> <i>International Journal of Computer Vision (<b>IJCV</b>)</i>, vol. 133, pp. 652–671, 2025."
    },
    {
      "title": "AsyCo: An Asymmetric Dual-task Co-training Model for Partial-label Learning.",
      "authorsHtml": "Beibei Li, Yiyuan Zheng, Beihong Jin, Tao Xiang, Haobo Wang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Science China Information Sciences (<b>SCIS</b>)</i>, vol. 68, no. 152101, 2025.",
      "year": 2025,
      "url": "https://link.springer.com/article/10.1007/s11432-023-4068-1",
      "noteHtml": "",
      "sourceIndex": 49,
      "sourceHtml": "Beibei Li, Yiyuan Zheng, Beihong Jin, Tao Xiang, Haobo Wang, <b>Lei Feng*</b>. <br/> <a href=\"https://link.springer.com/article/10.1007/s11432-023-4068-1\">AsyCo: An Asymmetric Dual-task Co-training Model for Partial-label Learning.</a><br/> <i>Science China Information Sciences (<b>SCIS</b>)</i>, vol. 68, no. 152101, 2025."
    },
    {
      "title": "Bayesian-Guided Label Mapping for Visual Reprogramming.",
      "authorsHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 38th Conference on Neural Information Processing Systems (<b>NeurIPS'24</b>)</i>, 2024.",
      "year": 2024,
      "url": "https://openreview.net/forum?id=135eKqDoRR",
      "noteHtml": "(Oral, Acceptance Rate: 0.41%)",
      "sourceIndex": 50,
      "sourceHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.<br/> <a href=\"https://openreview.net/forum?id=135eKqDoRR\">Bayesian-Guided Label Mapping for Visual Reprogramming.</a><br/> <i>Proceedings of the 38th Conference on Neural Information Processing Systems (<b>NeurIPS'24</b>)</i>, 2024.<br/> (Oral, Acceptance Rate: 0.41%)"
    },
    {
      "title": "MacroHFT: Memory Augmented Context-aware Reinforcement Learning On High Frequency Trading.",
      "authorsHtml": "Chuqiao Zong, Chaojie Wang, Molei Qin, <b>Lei Feng</b>, Xinrun Wang, Bo An.",
      "venueHtml": "<i>Proceedings of the 30th SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'24</b>)</i>, pp. 4712-4721, 2024.",
      "year": 2024,
      "url": "https://dl.acm.org/doi/pdf/10.1145/3637528.3672064",
      "noteHtml": "",
      "sourceIndex": 51,
      "sourceHtml": "Chuqiao Zong, Chaojie Wang, Molei Qin, <b>Lei Feng</b>, Xinrun Wang, Bo An.<br/> <a href=\"https://dl.acm.org/doi/pdf/10.1145/3637528.3672064\">MacroHFT: Memory Augmented Context-aware Reinforcement Learning On High Frequency Trading.</a><br/> <i>Proceedings of the 30th SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'24</b>)</i>, pp. 4712-4721, 2024."
    },
    {
      "title": "Learning Geometry-Aware Representations for New Intent Discovery.",
      "authorsHtml": "Kai Tang, Junbo Zhao, Xiao Ding, Runze Wu, <b>Lei Feng</b>, Gang Chen, Haobo Wang.",
      "venueHtml": "<i>Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (<b>ACL'24</b>)</i>, pp. 5641–5654, 2024.",
      "year": 2024,
      "url": "https://aclanthology.org/2024.acl-long.306.pdf",
      "noteHtml": "",
      "sourceIndex": 52,
      "sourceHtml": "Kai Tang, Junbo Zhao, Xiao Ding, Runze Wu, <b>Lei Feng</b>, Gang Chen, Haobo Wang. <br/> <a href=\"https://aclanthology.org/2024.acl-long.306.pdf\">Learning Geometry-Aware Representations for New Intent Discovery.</a><br/> <i>Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (<b>ACL'24</b>)</i>, pp. 5641–5654, 2024."
    },
    {
      "title": "Exploiting Human-AI Dependence for Learning to Defer.",
      "authorsHtml": "Zixi Wei, Yuzhou Cao, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 52484-52499, 2024.",
      "year": 2024,
      "url": "https://openreview.net/pdf?id=aiz79FxjaI",
      "noteHtml": "",
      "sourceIndex": 53,
      "sourceHtml": "Zixi Wei, Yuzhou Cao, <b>Lei Feng*</b>. <br/> <a href=\"https://openreview.net/pdf?id=aiz79FxjaI\">Exploiting Human-AI Dependence for Learning to Defer.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 52484-52499, 2024."
    },
    {
      "title": "Mitigating Privacy Risk in Membership Inference by Convex-Concave Loss.",
      "authorsHtml": "Zhenlong Liu, <b>Lei Feng</b>, Huiping Zhuang, Xiaofeng Cao, Hongxin Wei.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 30998-31014, 2024.",
      "year": 2024,
      "url": "https://arxiv.org/pdf/2402.05453",
      "noteHtml": "",
      "sourceIndex": 54,
      "sourceHtml": "Zhenlong Liu, <b>Lei Feng</b>, Huiping Zhuang, Xiaofeng Cao, Hongxin Wei. <br/> <a href=\"https://arxiv.org/pdf/2402.05453\">Mitigating Privacy Risk in Membership Inference by Convex-Concave Loss.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 30998-31014, 2024."
    },
    {
      "title": "Candidate Pseudolabel Learning: Enhancing Vision-Language Models by Prompt Tuning with Unlabeled Data.",
      "authorsHtml": "Jiahan Zhang, Qi Wei, Feng Liu, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 60004-60020, 2024.",
      "year": 2024,
      "url": "https://arxiv.org/pdf/2406.10502",
      "noteHtml": "(Oral, Acceptance Rate: 1.52%)",
      "sourceIndex": 55,
      "sourceHtml": "Jiahan Zhang, Qi Wei, Feng Liu, <b>Lei Feng*</b>. <br/> <a href=\"https://arxiv.org/pdf/2406.10502\">Candidate Pseudolabel Learning: Enhancing Vision-Language Models by Prompt Tuning with Unlabeled Data.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 60004-60020, 2024.<br/> (Oral, Acceptance Rate: 1.52%)"
    },
    {
      "title": "A General Framework for Learning from Weak Supervision.",
      "authorsHtml": "Hao Chen, Jindong Wang, <b>Lei Feng</b>, Xiang Li, Yidong Wang, Xing Xie, Masashi Sugiyama, Rita Singh, Bhiksha Raj.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 7462-7485, 2024.",
      "year": 2024,
      "url": "https://arxiv.org/pdf/2402.01922",
      "noteHtml": "",
      "sourceIndex": 56,
      "sourceHtml": "Hao Chen, Jindong Wang, <b>Lei Feng</b>, Xiang Li, Yidong Wang, Xing Xie, Masashi Sugiyama, Rita Singh, Bhiksha Raj. <br/> <a href=\"https://arxiv.org/pdf/2402.01922\">A General Framework for Learning from Weak Supervision.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 7462-7485, 2024."
    },
    {
      "title": "Visual-Text Cross Alignment: Refining the Similarity Score in Vision-Language Models.",
      "authorsHtml": "Jinhao Li, Haopeng Li, Sarah Monazam Erfani, <b>Lei Feng</b>, James Bailey, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 28018-28039, 2024.",
      "year": 2024,
      "url": "https://arxiv.org/pdf/2406.02915",
      "noteHtml": "",
      "sourceIndex": 57,
      "sourceHtml": "Jinhao Li, Haopeng Li, Sarah Monazam Erfani, <b>Lei Feng</b>, James Bailey, Feng Liu. <br/> <a href=\"https://arxiv.org/pdf/2406.02915\">Visual-Text Cross Alignment: Refining the Similarity Score in Vision-Language Models.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 28018-28039, 2024."
    },
    {
      "title": "Positive and Unlabeled Learning with Controlled Probability Boundary Fence.",
      "authorsHtml": "Changchun Li, Yuanchao Dai, <b>Lei Feng</b>, Ximing Li, Bing Wang, Jihong Ouyang.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 27641-27652, 2024.",
      "year": 2024,
      "url": "https://proceedings.mlr.press/v235/li24p.html",
      "noteHtml": "",
      "sourceIndex": 58,
      "sourceHtml": "Changchun Li, Yuanchao Dai, <b>Lei Feng</b>, Ximing Li, Bing Wang, Jihong Ouyang. <br/> <a href=\"\">Positive and Unlabeled Learning with Controlled Probability Boundary Fence.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 27641-27652, 2024."
    },
    {
      "title": "Sample-Specific Masks for Visual Reprogramming-based Prompting.",
      "authorsHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu.",
      "venueHtml": "<i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 5383-5408, 2024.",
      "year": 2024,
      "url": "https://arxiv.org/pdf/2406.03150",
      "noteHtml": "(Spotlight, Acceptance Rate: 3.54%)",
      "sourceIndex": 59,
      "sourceHtml": "Chengyi Cai, Zesheng Ye, <b>Lei Feng</b>, Jianzhong Qi, Feng Liu. <br/> <a href=\"https://arxiv.org/pdf/2406.03150\">Sample-Specific Masks for Visual Reprogramming-based Prompting.</a><br/> <i>Proceedings of the 41st International Conference on Machine Learning (<b>ICML'24</b>)</i>, pp. 5383-5408, 2024.<br/> (Spotlight, Acceptance Rate: 3.54%)"
    },
    {
      "title": "Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation.",
      "authorsHtml": "Lin Long, Haobo Wang, Zhijie Jiang, <b>Lei Feng</b>, Chang Yao, Gang Chen, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 23138-23147, 2024.",
      "year": 2024,
      "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Long_Positive-Unlabeled_Learning_by_Latent_Group-Aware_Meta_Disambiguation_CVPR_2024_paper.pdf",
      "noteHtml": "",
      "sourceIndex": 60,
      "sourceHtml": "Lin Long, Haobo Wang, Zhijie Jiang, <b>Lei Feng</b>, Chang Yao, Gang Chen, Junbo Zhao. <br/> <a href=\"https://openaccess.thecvf.com/content/CVPR2024/papers/Long_Positive-Unlabeled_Learning_by_Latent_Group-Aware_Meta_Disambiguation_CVPR_2024_paper.pdf\">Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 23138-23147, 2024."
    },
    {
      "title": "Targeted Representation Alignment for Open-World Semi-Supervised Learning.",
      "authorsHtml": "Ruixuan Xiao, <b>Lei Feng</b>, Kai Tang, Junbo Zhao, Yixuan Li, Gang Chen, Haobo Wang.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 23072-23082, 2024.",
      "year": 2024,
      "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Xiao_Targeted_Representation_Alignment_for_Open-World_Semi-Supervised_Learning_CVPR_2024_paper.pdf",
      "noteHtml": "",
      "sourceIndex": 61,
      "sourceHtml": "Ruixuan Xiao, <b>Lei Feng</b>, Kai Tang, Junbo Zhao, Yixuan Li, Gang Chen, Haobo Wang. <br/> <a href=\"https://openaccess.thecvf.com/content/CVPR2024/papers/Xiao_Targeted_Representation_Alignment_for_Open-World_Semi-Supervised_Learning_CVPR_2024_paper.pdf\">Targeted Representation Alignment for Open-World Semi-Supervised Learning.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 23072-23082, 2024."
    },
    {
      "title": "CroSel: Cross Selection of Confident Pseudo Labels for Partial-Label Learning.",
      "authorsHtml": "Shiyu Tian, Hongxin Wei, Yiqun Wang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 19479-19488, 2024.",
      "year": 2024,
      "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Tian_CroSel_Cross_Selection_of_Confident_Pseudo_Labels_for_Partial-Label_Learning_CVPR_2024_paper.pdf",
      "noteHtml": "(Oral, Acceptance Rate: 0.78%)",
      "sourceIndex": 62,
      "sourceHtml": "Shiyu Tian, Hongxin Wei, Yiqun Wang, <b>Lei Feng*</b>. <br/> <a href=\"https://openaccess.thecvf.com/content/CVPR2024/papers/Tian_CroSel_Cross_Selection_of_Confident_Pseudo_Labels_for_Partial-Label_Learning_CVPR_2024_paper.pdf\">CroSel: Cross Selection of Confident Pseudo Labels for Partial-Label Learning.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 19479-19488, 2024.<br/> (Oral, Acceptance Rate: 0.78%)"
    },
    {
      "title": "Investigating and Mitigating the Side Effects of Noisy Views for Self-Supervised Clustering Algorithms in Practical Multi-View Scenarios.",
      "authorsHtml": "Jie Xu, Yazhou Ren, Xiaolong Wang, <b>Lei Feng</b>, Zheng Zhang, Gang Niu, Xiaofeng Zhu.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 22957-22966, 2024.",
      "year": 2024,
      "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Xu_Investigating_and_Mitigating_the_Side_Effects_of_Noisy_Views_for_CVPR_2024_paper.pdf",
      "noteHtml": "",
      "sourceIndex": 63,
      "sourceHtml": "Jie Xu, Yazhou Ren, Xiaolong Wang, <b>Lei Feng</b>, Zheng Zhang, Gang Niu, Xiaofeng Zhu. <br/> <a href=\"https://openaccess.thecvf.com/content/CVPR2024/papers/Xu_Investigating_and_Mitigating_the_Side_Effects_of_Noisy_Views_for_CVPR_2024_paper.pdf\">Investigating and Mitigating the Side Effects of Noisy Views for Self-Supervised Clustering Algorithms <br/> in Practical Multi-View Scenarios.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'24</b>)</i>, pp. 22957-22966, 2024."
    },
    {
      "title": "Consistent Hierarchical Classification with A Generalized Metric.",
      "authorsHtml": "Yuzhou Cao, <b>Lei Feng*</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 27th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'24</b>)</i>, pp. 4825-4833, 2024.",
      "year": 2024,
      "url": "https://proceedings.mlr.press/v238/cao24a/cao24a.pdf",
      "noteHtml": "",
      "sourceIndex": 64,
      "sourceHtml": "Yuzhou Cao, <b>Lei Feng*</b>, Bo An. <br/> <a href=\"https://proceedings.mlr.press/v238/cao24a/cao24a.pdf\">Consistent Hierarchical Classification with A Generalized Metric.</a><br/> <i>Proceedings of the 27th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'24</b>)</i>, pp. 4825-4833, 2024."
    },
    {
      "title": "Mitigating Underfitting in Learning to Defer with Consistent Losses.",
      "authorsHtml": "Shuqi Liu, Yuzhou Cao, Qiaozhen Zhang, <b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 27th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'24</b>)</i>, pp. 4816-4824, 2024.",
      "year": 2024,
      "url": "https://proceedings.mlr.press/v238/liu24h/liu24h.pdf",
      "noteHtml": "",
      "sourceIndex": 65,
      "sourceHtml": "Shuqi Liu, Yuzhou Cao, Qiaozhen Zhang, <b>Lei Feng</b>, Bo An. <br/> <a href=\"https://proceedings.mlr.press/v238/liu24h/liu24h.pdf\">Mitigating Underfitting in Learning to Defer with Consistent Losses.</a><br/> <i>Proceedings of the 27th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'24</b>)</i>, pp. 4816-4824, 2024."
    },
    {
      "title": "Early Stopping Against Label Noise Without Validation Data.",
      "authorsHtml": "Suqin Yuan, <b>Lei Feng*</b>, Tongliang Liu*.",
      "venueHtml": "<i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.",
      "year": 2024,
      "url": "https://openreview.net/pdf?id=CMzF2aOfqp",
      "noteHtml": "",
      "sourceIndex": 66,
      "sourceHtml": "Suqin Yuan, <b>Lei Feng*</b>, Tongliang Liu*.<br/> <a href=\"https://openreview.net/pdf?id=CMzF2aOfqp\">Early Stopping Against Label Noise Without Validation Data.</a><br/> <i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024."
    },
    {
      "title": "Consistent Multi-Class Classification from Multiple Unlabeled Datasets.",
      "authorsHtml": "Zixi Wei, Senlin Shu, Yuzhou Cao, Hongxin Wei, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.",
      "year": 2024,
      "url": "https://openreview.net/pdf?id=fW7DOHDQvF",
      "noteHtml": "(Spotlight, Acceptance Rate: 5.01%)",
      "sourceIndex": 67,
      "sourceHtml": "Zixi Wei, Senlin Shu, Yuzhou Cao, Hongxin Wei, Bo An, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=fW7DOHDQvF\">Consistent Multi-Class Classification from Multiple Unlabeled Datasets.</a><br/> <i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.<br/> (Spotlight, Acceptance Rate: 5.01%)"
    },
    {
      "title": "On the Vulnerability of Adversarially Trained Models Against Two-faced Attacks.",
      "authorsHtml": "Shengjie Zhou, Lue Tao, Yuzhou Cao, Tao Xiang, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.",
      "year": 2024,
      "url": "https://openreview.net/pdf?id=mXpNp8MMr5",
      "noteHtml": "",
      "sourceIndex": 68,
      "sourceHtml": "Shengjie Zhou, Lue Tao, Yuzhou Cao, Tao Xiang, Bo An, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=mXpNp8MMr5\">On the Vulnerability of Adversarially Trained Models Against Two-faced Attacks.</a><br/> <i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024."
    },
    {
      "title": "Candidate Label Set Pruning: A Data-centric Perspective for Deep Partial-label Learning.",
      "authorsHtml": "Shuo He, Chaojie Wang, Guowu Yang*, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.",
      "year": 2024,
      "url": "https://openreview.net/pdf?id=Fk5IzauJ7F",
      "noteHtml": "(Oral, Acceptance Rate: 1.16%)",
      "sourceIndex": 69,
      "sourceHtml": "Shuo He, Chaojie Wang, Guowu Yang*, <b>Lei Feng*</b>.<br/> <a href=\"https://openreview.net/pdf?id=Fk5IzauJ7F\">Candidate Label Set Pruning: A Data-centric Perspective for Deep Partial-label Learning.</a><br/> <i>Proceedings of the 12th International Conference on Learning Representations (<b>ICLR'24</b>)</i>, 2024.<br/> (Oral, Acceptance Rate: 1.16%)"
    },
    {
      "title": "Robust Node Classification on Graph Data with Graph and Label Noise.",
      "authorsHtml": "Yonghua Zhu, <b>Lei Feng</b>, Zhenyun Deng, Yang Chen, Robert Amor, Michael Witbrock.",
      "venueHtml": "<i>Proceedings of the 38th AAAI Conference on Artificial Intelligence (<b>AAAI'24</b>)</i>, pp. 17220-17227, 2024.",
      "year": 2024,
      "url": "https://ojs.aaai.org/index.php/AAAI/article/view/29668",
      "noteHtml": "",
      "sourceIndex": 70,
      "sourceHtml": "Yonghua Zhu, <b>Lei Feng</b>, Zhenyun Deng, Yang Chen, Robert Amor, Michael Witbrock.<br/> <a href=\"https://ojs.aaai.org/index.php/AAAI/article/view/29668\">Robust Node Classification on Graph Data with Graph and Label Noise.</a><br/> <i>Proceedings of the 38th AAAI Conference on Artificial Intelligence (<b>AAAI'24</b>)</i>, pp. 17220-17227, 2024."
    },
    {
      "title": "Online Binary Classification from Similar and Dissimilar Data.",
      "authorsHtml": "Senlin Shu, Haobo Wang, Zhuowei Wang, Bo Han, Tao Xiang, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 3463–3484, 2024.",
      "year": 2024,
      "url": "https://link.springer.com/article/10.1007/s10994-023-06434-6",
      "noteHtml": "",
      "sourceIndex": 71,
      "sourceHtml": "Senlin Shu, Haobo Wang, Zhuowei Wang, Bo Han, Tao Xiang, Bo An, <b>Lei Feng*</b>.<br/> <a href=\"https://link.springer.com/article/10.1007/s10994-023-06434-6\">Online Binary Classification from Similar and Dissimilar Data.</a><br/> <i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 3463–3484, 2024."
    },
    {
      "title": "Learning Sample-Aware Confidence Threshold for Semi-Supervised Learning.",
      "authorsHtml": "Qi Wei, <b>Lei Feng</b>, Haoliang Sun, Ren Wang, Rundong He, Yilong Yin.",
      "venueHtml": "<i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 5423–5445, 2024.",
      "year": 2024,
      "url": "https://link.springer.com/article/10.1007/s10994-023-06425-7",
      "noteHtml": "",
      "sourceIndex": 72,
      "sourceHtml": "Qi Wei, <b>Lei Feng</b>, Haoliang Sun, Ren Wang, Rundong He, Yilong Yin.<br/> <a href=\"https://link.springer.com/article/10.1007/s10994-023-06425-7\">Learning Sample-Aware Confidence Threshold for Semi-Supervised Learning.</a><br/> <i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 5423–5445, 2024."
    },
    {
      "title": "Exploiting Counter-Examples for Active Learning with Partial-labels.",
      "authorsHtml": "Fei Zhang, Junjie Ye, <b>Lei Feng</b>, Zhongwen Rao, Jieming Zhu, Marcus Kalander, Chen Gong, Jianye Hao, Bo Han.",
      "venueHtml": "<i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 3849–3868, 2024.",
      "year": 2024,
      "url": "https://link.springer.com/article/10.1007/s10994-023-06485-9",
      "noteHtml": "",
      "sourceIndex": 73,
      "sourceHtml": "Fei Zhang, Junjie Ye, <b>Lei Feng</b>, Zhongwen Rao, Jieming Zhu, Marcus Kalander, Chen Gong, Jianye Hao, Bo Han.<br/> <a href=\"https://link.springer.com/article/10.1007/s10994-023-06485-9\">Exploiting Counter-Examples for Active Learning with Partial-labels.</a><br/> <i>Machine Learning (<b>MLJ</b>)</i>, vol. 113, pp. 3849–3868, 2024."
    },
    {
      "title": "Multiple-Instance Learning from Triplet Comparison Bags.",
      "authorsHtml": "Senlin Shu, Deng-Bao Wang, Suqin Yuan, Hongxin Wei, Jiuchuan Jiang, <b>Lei Feng*</b>, Min-Ling Zhang.",
      "venueHtml": "<i>ACM Transactions on Knowledge Discovery from Data (<b>TKDD</b>)</i>, vol. 18, no. 4, pp. 1-18, 2024.",
      "year": 2024,
      "url": "https://dl.acm.org/doi/10.1145/3638776",
      "noteHtml": "",
      "sourceIndex": 74,
      "sourceHtml": "Senlin Shu, Deng-Bao Wang, Suqin Yuan, Hongxin Wei, Jiuchuan Jiang, <b>Lei Feng*</b>, Min-Ling Zhang.<br/> <a href=\"https://dl.acm.org/doi/10.1145/3638776\">Multiple-Instance Learning from Triplet Comparison Bags.</a><br/> <i>ACM Transactions on Knowledge Discovery from Data (<b>TKDD</b>)</i>, vol. 18, no. 4, pp. 1-18, 2024."
    },
    {
      "title": "On the Value of Head Labels in Multi-Label Text Classification.",
      "authorsHtml": "Haobo Wang, Cheng Peng, Hede Dong, <b>Lei Feng</b>, Weiwei Liu, Tianlei Hu, Ke Chen, Gang Chen.",
      "venueHtml": "<i>ACM Transactions on Knowledge Discovery from Data (<b>TKDD</b>)</i>, vol. 18, no. 5, pp. 1-21, 2024.",
      "year": 2024,
      "url": "https://dl.acm.org/doi/10.1145/3643853",
      "noteHtml": "",
      "sourceIndex": 75,
      "sourceHtml": "Haobo Wang, Cheng Peng, Hede Dong, <b>Lei Feng</b>, Weiwei Liu, Tianlei Hu, Ke Chen, Gang Chen.<br/> <a href=\"https://dl.acm.org/doi/10.1145/3643853\">On the Value of Head Labels in Multi-Label Text Classification.</a><br/> <i>ACM Transactions on Knowledge Discovery from Data (<b>TKDD</b>)</i>, vol. 18, no. 5, pp. 1-21, 2024."
    },
    {
      "title": "Regression with Cost-based Rejection.",
      "authorsHtml": "Xin Cheng, Yuzhou Cao, Haobo Wang, Hongxin Wei, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 45172-45196, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2311.04550.pdf",
      "noteHtml": "",
      "sourceIndex": 76,
      "sourceHtml": "Xin Cheng, Yuzhou Cao, Haobo Wang, Hongxin Wei, Bo An, <b>Lei Feng*</b>.<br/> <a href=\"https://arxiv.org/pdf/2311.04550.pdf\">Regression with Cost-based Rejection.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 45172-45196, 2023."
    },
    {
      "title": "SPA: A Graph Spectral Alignment Perspective for Domain Adaptation.",
      "authorsHtml": "Zhiqing Xiao, Haobo Wang, Ying Jin, <b>Lei Feng</b>, Gang Chen, Fei Huang, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 37252-37272, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2310.17594.pdf",
      "noteHtml": "",
      "sourceIndex": 77,
      "sourceHtml": "Zhiqing Xiao, Haobo Wang, Ying Jin, <b>Lei Feng</b>, Gang Chen, Fei Huang, Junbo Zhao.<br/> <a href=\"https://arxiv.org/pdf/2310.17594.pdf\">SPA: A Graph Spectral Alignment Perspective for Domain Adaptation.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 37252-37272, 2023."
    },
    {
      "title": "In Defense of Softmax Parametrization for Calibrated and Consistent Learning to Defer.",
      "authorsHtml": "Yuzhou Cao, Hussein Mozannar, <b>Lei Feng*</b>, Hongxin Wei, Bo An.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 38485-38503, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2311.01106.pdf",
      "noteHtml": "",
      "sourceIndex": 78,
      "sourceHtml": "Yuzhou Cao, Hussein Mozannar, <b>Lei Feng*</b>, Hongxin Wei, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2311.01106.pdf\">In Defense of Softmax Parametrization for Calibrated and Consistent Learning to Defer.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 38485-38503, 2023."
    },
    {
      "title": "On the Importance of Feature Separability in Predicting Out-Of-Distribution Error.",
      "authorsHtml": "Renchunzi Xie, Hongxin Wei, <b>Lei Feng</b>, Yuzhou Cao, Bo An.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 27783-27800, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2303.15488.pdf",
      "noteHtml": "",
      "sourceIndex": 79,
      "sourceHtml": "Renchunzi Xie, Hongxin Wei, <b>Lei Feng</b>, Yuzhou Cao, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2303.15488.pdf\">On the Importance of Feature Separability in Predicting Out-Of-Distribution Error.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 27783-27800, 2023."
    },
    {
      "title": "ALIM: Adjusting Label Importance Mechanism for Noisy Partial Label Learning.",
      "authorsHtml": "Mingyu Xu, Zheng Lian, <b>Lei Feng</b>, Bin Liu, Jianhua Tao.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 38668-38684, 2023.",
      "year": 2023,
      "url": "https://openreview.net/pdf?id=PYSfn5xXEe",
      "noteHtml": "",
      "sourceIndex": 80,
      "sourceHtml": "Mingyu Xu, Zheng Lian, <b>Lei Feng</b>, Bin Liu, Jianhua Tao.<br/> <a href=\"https://openreview.net/pdf?id=PYSfn5xXEe\">ALIM: Adjusting Label Importance Mechanism for Noisy Partial Label Learning.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 38668-38684, 2023."
    },
    {
      "title": "Binary Classification with Confidence Difference.",
      "authorsHtml": "Wei Wang, <b>Lei Feng</b>, Yuchen Jiang, Gang Niu, Min-Ling Zhang, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 5936-5960, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2310.05632.pdf",
      "noteHtml": "",
      "sourceIndex": 81,
      "sourceHtml": "Wei Wang, <b>Lei Feng</b>, Yuchen Jiang, Gang Niu, Min-Ling Zhang, Masashi Sugiyama.<br/> <a href=\"https://arxiv.org/pdf/2310.05632.pdf\">Binary Classification with Confidence Difference.</a><br/> <i>Proceedings of the 37th Conference on Neural Information Processing Systems (<b>NeurIPS'23</b>)</i>, pp. 5936-5960, 2023."
    },
    {
      "title": "Candidate-aware Selective Disambiguation Based On Normalized Entropy for Instance-dependent Partial-label Learning.",
      "authorsHtml": "Shuo He, Guowu Yang, <b>Lei Feng</b>.",
      "venueHtml": "<i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 1792-1801, 2023.",
      "year": 2023,
      "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/He_Candidate-aware_Selective_Disambiguation_Based_On_Normalized_Entropy_for_Instance-dependent_Partial-label_ICCV_2023_paper.pdf",
      "noteHtml": "",
      "sourceIndex": 82,
      "sourceHtml": "Shuo He, Guowu Yang, <b>Lei Feng</b>. <br/> <a href=\"https://openaccess.thecvf.com/content/ICCV2023/papers/He_Candidate-aware_Selective_Disambiguation_Based_On_Normalized_Entropy_for_Instance-dependent_Partial-label_ICCV_2023_paper.pdf\">Candidate-aware Selective Disambiguation Based On Normalized Entropy for Instance-dependent Partial-label Learning.</a><br/> <i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 1792-1801, 2023."
    },
    {
      "title": "Late Stopping: Avoiding Confidently Learning from Mislabeled Examples.",
      "authorsHtml": "Suqin Yuan, <b>Lei Feng*</b>, Tongliang Liu*.",
      "venueHtml": "<i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 16079-16088, 2023.",
      "year": 2023,
      "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Yuan_Late_Stopping_Avoiding_Confidently_Learning_from_Mislabeled_Examples_ICCV_2023_paper.pdf",
      "noteHtml": "",
      "sourceIndex": 83,
      "sourceHtml": "Suqin Yuan, <b>Lei Feng*</b>, Tongliang Liu*. <br/> <a href=\"https://openaccess.thecvf.com/content/ICCV2023/papers/Yuan_Late_Stopping_Avoiding_Confidently_Learning_from_Mislabeled_Examples_ICCV_2023_paper.pdf\">Late Stopping: Avoiding Confidently Learning from Mislabeled Examples.</a><br/> <i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 16079-16088, 2023."
    },
    {
      "title": "Multi-Label Knowledge Distillation.",
      "authorsHtml": "Penghui Yang, Ming-Kun Xie, Chen-Chen Zong, <b>Lei Feng</b>, Gang Niu, Masashi Sugiyama, Sheng-Jun Huang.",
      "venueHtml": "<i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 17271-17280, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2308.06453.pdf",
      "noteHtml": "",
      "sourceIndex": 84,
      "sourceHtml": "Penghui Yang, Ming-Kun Xie, Chen-Chen Zong, <b>Lei Feng</b>, Gang Niu, Masashi Sugiyama, Sheng-Jun Huang. <br/> <a href=\"https://arxiv.org/pdf/2308.06453.pdf\">Multi-Label Knowledge Distillation.</a><br/> <i>Proceedings of the International Conference on Computer Vision (<b>ICCV'23</b>)</i>, pp. 17271-17280, 2023."
    },
    {
      "title": "Partial-label Learning with Mixed Closed-set and Open-set Out-of-candidate Examples.",
      "authorsHtml": "Shuo He, <b>Lei Feng</b>, Guowu Yang.",
      "venueHtml": "<i>Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'23</b>)</i>, pp. 722-731, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2307.00553.pdf",
      "noteHtml": "",
      "sourceIndex": 85,
      "sourceHtml": "Shuo He, <b>Lei Feng</b>, Guowu Yang. <br/> <a href=\"https://arxiv.org/pdf/2307.00553.pdf\">Partial-label Learning with Mixed Closed-set and Open-set Out-of-candidate Examples.</a><br/> <i>Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'23</b>)</i>, pp. 722-731, 2023."
    },
    {
      "title": "Mitigating Memorization of Noisy Labels by Clipping the Model Prediction.",
      "authorsHtml": "Hongxin Wei, Huiping Zhuang, Renchunzi Xie, <b>Lei Feng</b>, Gang Niu, Bo An, Yixuan Li.",
      "venueHtml": "<i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 36868-36886, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2212.04055.pdf",
      "noteHtml": "",
      "sourceIndex": 86,
      "sourceHtml": "Hongxin Wei, Huiping Zhuang, Renchunzi Xie, <b>Lei Feng</b>, Gang Niu, Bo An, Yixuan Li. <br/> <a href=\"https://arxiv.org/pdf/2212.04055.pdf\">Mitigating Memorization of Noisy Labels by Clipping the Model Prediction.</a><br/> <i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 36868-36886, 2023."
    },
    {
      "title": "A Universal Unbiased Method for Classification from Aggregate Observations.",
      "authorsHtml": "Zixi Wei, <b>Lei Feng*</b>, Bo Han, Tongliang Liu, Gang Niu, Xiaofeng Zhu, Heng Tao Shen.",
      "venueHtml": "<i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 36804-36820, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2306.11343.pdf",
      "noteHtml": "",
      "sourceIndex": 87,
      "sourceHtml": "Zixi Wei, <b>Lei Feng*</b>, Bo Han, Tongliang Liu, Gang Niu, Xiaofeng Zhu, Heng Tao Shen. <br/> <a href=\"https://arxiv.org/pdf/2306.11343.pdf\">A Universal Unbiased Method for Classification from Aggregate Observations.</a><br/> <i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 36804-36820, 2023."
    },
    {
      "title": "Weakly Supervised Regression with Interval Targets.",
      "authorsHtml": "Xin Cheng, Yuzhou Cao, Ximing Li, Bo An, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 5428-5448, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2306.10458.pdf",
      "noteHtml": "",
      "sourceIndex": 88,
      "sourceHtml": "Xin Cheng, Yuzhou Cao, Ximing Li, Bo An, <b>Lei Feng*</b>. <br/> <a href=\"https://arxiv.org/pdf/2306.10458.pdf\">Weakly Supervised Regression with Interval Targets.</a><br/> <i>Proceedings of the 40th International Conference on Machine Learning (<b>ICML'23</b>)</i>, pp. 5428-5448, 2023."
    },
    {
      "title": "ProMix: Combating Label Noise via Maximizing Clean Sample Utility.",
      "authorsHtml": "Ruixuan Xiao, Yiwen Dong, Haobo Wang, <b>Lei Feng</b>, Runze Wu, Gang Chen, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the 32nd International Joint Conference on Artificial Intelligence (<b>IJCAI'23</b>)</i>, pp. 4442-4450, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2207.10276.pdf",
      "noteHtml": "",
      "sourceIndex": 89,
      "sourceHtml": "Ruixuan Xiao, Yiwen Dong, Haobo Wang, <b>Lei Feng</b>, Runze Wu, Gang Chen, Junbo Zhao.<br/> <a href=\"https://arxiv.org/pdf/2207.10276.pdf\">ProMix: Combating Label Noise via Maximizing Clean Sample Utility.</a><br/> <i>Proceedings of the 32nd International Joint Conference on Artificial Intelligence (<b>IJCAI'23</b>)</i>, pp. 4442-4450, 2023."
    },
    {
      "title": "Fine-Grained Classification with Noisy Labels.",
      "authorsHtml": "Qi Wei, <b>Lei Feng</b>, Haoliang Sun, Ren Wang, Chenhui Guo, Yilong Yin.",
      "venueHtml": "<i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'23</b>)</i>, pp. 11651-11660, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2303.02404.pdf",
      "noteHtml": "",
      "sourceIndex": 90,
      "sourceHtml": "Qi Wei, <b>Lei Feng</b>, Haoliang Sun, Ren Wang, Chenhui Guo, Yilong Yin. <br/> <a href=\"https://arxiv.org/pdf/2303.02404.pdf\">Fine-Grained Classification with Noisy Labels.</a><br/> <i>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'23</b>)</i>, pp. 11651-11660, 2023."
    },
    {
      "title": "Consistent Complementary-Label Learning via Order-Preserving Losses.",
      "authorsHtml": "Shuqi Liu, Yuzhou Cao, Qiaozhen Zhang, <b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 26th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'23</b>)</i>, pp. 8734-8748, 2023.",
      "year": 2023,
      "url": "https://proceedings.mlr.press/v206/liu23g.html",
      "noteHtml": "",
      "sourceIndex": 91,
      "sourceHtml": "Shuqi Liu, Yuzhou Cao, Qiaozhen Zhang, <b>Lei Feng</b>, Bo An. <br/> <a href=\"https://proceedings.mlr.press/v206/liu23g.html\">Consistent Complementary-Label Learning via Order-Preserving Losses.</a><br/> <i>Proceedings of the 26th International Conference on Artificial Intelligence and Statistics (<b>AISTATS'23</b>)</i>, pp. 8734-8748, 2023."
    },
    {
      "title": "Partial-Label Regression.",
      "authorsHtml": "Xin Cheng, Dengbao Wang, <b>Lei Feng*</b>, Minling Zhang, Bo An.",
      "venueHtml": "<i>Proceedings of the 37th AAAI Conference on Artificial Intelligence (<b>AAAI'23</b>)</i>, pp. 7140-7147, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2306.08968.pdf",
      "noteHtml": "(Oral)",
      "sourceIndex": 92,
      "sourceHtml": "Xin Cheng, Dengbao Wang, <b>Lei Feng*</b>, Minling Zhang, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2306.08968.pdf\">Partial-Label Regression.</a><br/> <i>Proceedings of the 37th AAAI Conference on Artificial Intelligence (<b>AAAI'23</b>)</i>, pp. 7140-7147, 2023.<br/> (Acceptance Rate: 19.6%)"
    },
    {
      "title": "A Generalized Unbiased Risk Estimator for Learning with Augmented Classes.",
      "authorsHtml": "Senlin Shu, Shuo He, Haobo Wang, Hongxin Wei, Tao Xiang, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Proceedings of the 37th AAAI Conference on Artificial Intelligence (<b>AAAI'23</b>)</i>, pp. 9829-9836, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/pdf/2306.06894.pdf",
      "noteHtml": "(Oral)",
      "sourceIndex": 93,
      "sourceHtml": "Senlin Shu, Shuo He, Haobo Wang, Hongxin Wei, Tao Xiang, <b>Lei Feng*</b>.<br/> <a href=\"https://arxiv.org/pdf/2306.06894.pdf\">A Generalized Unbiased Risk Estimator for Learning with Augmented Classes.</a><br/> <i>Proceedings of the 37th AAAI Conference on Artificial Intelligence (<b>AAAI'23</b>)</i>, pp. 9829-9836, 2023.<br/> (Acceptance Rate: 19.6%)"
    },
    {
      "title": "PiCO+: Contrastive Label Disambiguation for Robust Partial Label Learning.",
      "authorsHtml": "Haobo Wang, Ruixuan Xiao, Yixuan Li, <b>Lei Feng</b>, Gang Niu, Gang Chen, Junbo Zhao.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2023.",
      "year": 2023,
      "url": "https://arxiv.org/abs/2201.08984",
      "noteHtml": "",
      "sourceIndex": 94,
      "sourceHtml": "Haobo Wang, Ruixuan Xiao, Yixuan Li, <b>Lei Feng</b>, Gang Niu, Gang Chen, Junbo Zhao.<br/> <a href=\"https://arxiv.org/abs/2201.08984\">PiCO+: Contrastive Label Disambiguation for Robust Partial Label Learning.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2023."
    },
    {
      "title": "On the Robustness of Average Losses for Partial-Label Learning.",
      "authorsHtml": "Jiaqi Lv, Biao Liu, <b>Lei Feng</b>, Ning Xu, Miao Xu, Bo An, Gang Niu, Xin Geng, Masashi Sugiyama.",
      "venueHtml": "<i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2023.",
      "year": 2023,
      "url": "https://ieeexplore.ieee.org/document/10122995",
      "noteHtml": "",
      "sourceIndex": 95,
      "sourceHtml": "Jiaqi Lv, Biao Liu, <b>Lei Feng</b>, Ning Xu, Miao Xu, Bo An, Gang Niu, Xin Geng, Masashi Sugiyama.<br/> <a href=\"https://ieeexplore.ieee.org/document/10122995\">On the Robustness of Average Losses for Partial-Label Learning.</a><br/> <i>IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>)</i>, accepted, 2023."
    },
    {
      "title": "Multiple-Instance Learning from Unlabeled Bags with Pairwise Similarity.",
      "authorsHtml": "<b>Lei Feng</b>, Senlin Shu, Yuzhou Cao, Lue Tao, Hongxin Wei, Tao Xiang, Bo An, Gang Niu.",
      "venueHtml": "<i>IEEE Transactions on Knowledge and Data Engineering (<b>TKDE</b>)</i>, vol. 35, no. 11, pp. 11599-11609, 2023.",
      "year": 2023,
      "url": "https://ieeexplore.ieee.org/document/10021858",
      "noteHtml": "",
      "sourceIndex": 96,
      "sourceHtml": "<b>Lei Feng</b>, Senlin Shu, Yuzhou Cao, Lue Tao, Hongxin Wei, Tao Xiang, Bo An, Gang Niu.<br/> <a href=\"https://ieeexplore.ieee.org/document/10021858\">Multiple-Instance Learning from Unlabeled Bags with Pairwise Similarity.</a><br/> <i>IEEE Transactions on Knowledge and Data Engineering (<b>TKDE</b>)</i>, vol. 35, no. 11, pp. 11599-11609, 2023."
    },
    {
      "title": "COMET: Convolutional Dimension Interaction for Collaborative Filtering.",
      "authorsHtml": "Zhuoyi Lin, <b>Lei Feng*</b>, Xingzhi Guo, Yu Zhang, Rui Yin, Chee Keong Kwoh, Chi Xu.",
      "venueHtml": "<i>ACM Transactions on Intelligent Systems and Technology (<b>TIST</b>)</i>, vol. 14, no. 59, pp. 1-18, 2023.",
      "year": 2023,
      "url": "https://dl.acm.org/doi/10.1145/3588576",
      "noteHtml": "",
      "sourceIndex": 97,
      "sourceHtml": "Zhuoyi Lin, <b>Lei Feng*</b>, Xingzhi Guo, Yu Zhang, Rui Yin, Chee Keong Kwoh, Chi Xu.<br/> <a href=\"https://dl.acm.org/doi/10.1145/3588576\">COMET: Convolutional Dimension Interaction for Collaborative Filtering.</a><br/> <i>ACM Transactions on Intelligent Systems and Technology (<b>TIST</b>)</i>, vol. 14, no. 59, pp. 1-18, 2023."
    },
    {
      "title": "Learning Cross-Domain Semantic-Visual Relationships for Transductive Zero-Shot Learning.",
      "authorsHtml": "Fengmo Lv, Jianyang Zhang, Guowu Yang, <b>Lei Feng</b>, Yufeng Yu, Lixin Duan.",
      "venueHtml": "<i>Pattern Recognition (<b>PR</b>)</i>, vol. 141, pp. 109591, 2023.",
      "year": 2023,
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0031320323002923",
      "noteHtml": "",
      "sourceIndex": 98,
      "sourceHtml": "Fengmo Lv, Jianyang Zhang, Guowu Yang, <b>Lei Feng</b>, Yufeng Yu, Lixin Duan.<br/> <a href=\"https://www.sciencedirect.com/science/article/abs/pii/S0031320323002923\">Learning Cross-Domain Semantic-Visual Relationships for Transductive Zero-Shot Learning.</a><br/> <i>Pattern Recognition (<b>PR</b>)</i>, vol. 141, pp. 109591, 2023."
    },
    {
      "title": "Deep Learning from Multiple Noisy Annotators as A Union.",
      "authorsHtml": "Hongxin Wei, Renchunzi Xie, <b>Lei Feng*</b>, Bo Han, Bo An.",
      "venueHtml": "<i>IEEE Transactions on Neural Networks and Learning Systems (<b>TNNLS</b>)</i>, vol. 34, no. 12, pp. 10552-10562, 2023.",
      "year": 2023,
      "url": "https://ieeexplore.ieee.org/document/9765651",
      "noteHtml": "",
      "sourceIndex": 99,
      "sourceHtml": "Hongxin Wei, Renchunzi Xie, <b>Lei Feng*</b>, Bo Han, Bo An.<br/> <a href=\"https://ieeexplore.ieee.org/document/9765651\">Deep Learning from Multiple Noisy Annotators as A Union.</a><br/> <i>IEEE Transactions on Neural Networks and Learning Systems (<b>TNNLS</b>)</i>, vol. 34, no. 12, pp. 10552-10562, 2023."
    },
    {
      "title": "Generalizing Consistent Multi-Class Classification with Rejection to be Compatible with Arbitrary Losses.",
      "authorsHtml": "Yuzhou Cao, Tianchi Cai, <b>Lei Feng*</b>, Lihong Gu, Jinjie Gu, Bo An, Gang Niu, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 521-534, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=DwHIcEyias",
      "noteHtml": "",
      "sourceIndex": 100,
      "sourceHtml": "Yuzhou Cao, Tianchi Cai, <b>Lei Feng*</b>, Lihong Gu, Jinjie Gu, Bo An, Gang Niu, Masashi Sugiyama.<br/> <a href=\"https://openreview.net/pdf?id=DwHIcEyias\">Generalizing Consistent Multi-Class Classification with Rejection to be Compatible with Arbitrary Losses.</a><br/> <i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 521-534, 2022."
    },
    {
      "title": "SoLar: Sinkhorn Label Refinery for Imbalanced Partial-Label Learning.",
      "authorsHtml": "Haobo Wang, Mingxuan Xia, Yixuan Li, Yuren Mao, <b>Lei Feng</b>, Gang Chen, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 8104-8117, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=wUUutywJY6",
      "noteHtml": "",
      "sourceIndex": 101,
      "sourceHtml": "Haobo Wang, Mingxuan Xia, Yixuan Li, Yuren Mao, <b>Lei Feng</b>, Gang Chen, Junbo Zhao.<br/> <a href=\"https://openreview.net/pdf?id=wUUutywJY6\">SoLar: Sinkhorn Label Refinery for Imbalanced Partial-Label Learning.</a><br/> <i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 8104-8117, 2022."
    },
    {
      "title": "Can Adversarial Training Be Manipulated By Non-Robust Features?",
      "authorsHtml": "Lue Tao, <b>Lei Feng</b>, Hongxin Wei, Jinfeng Yi, Shengjun Huang, Songcan Chen.",
      "venueHtml": "<i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 26504-26518, 2022.",
      "year": 2022,
      "url": "https://arxiv.org/pdf/2201.13329.pdf",
      "noteHtml": "",
      "sourceIndex": 102,
      "sourceHtml": "Lue Tao, <b>Lei Feng</b>, Hongxin Wei, Jinfeng Yi, Shengjun Huang, Songcan Chen.<br/> <a href=\"https://arxiv.org/pdf/2201.13329.pdf\">Can Adversarial Training Be Manipulated By Non-Robust Features?</a><br/> <i>Proceedings of the 36th Conference on Neural Information Processing Systems (<b>NeurIPS'22</b>)</i>, pp. 26504-26518, 2022."
    },
    {
      "title": "Partial-Label Learning with Semantic Label Representations.",
      "authorsHtml": "Shuo He, <b>Lei Feng</b>, Fengmao Lv, Wen Li, Guowu Yang.",
      "venueHtml": "<i>Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'22</b>)</i>, pp. 545–553, 2022.",
      "year": 2022,
      "url": "https://dl.acm.org/doi/abs/10.1145/3534678.3539434",
      "noteHtml": "(Acceptance Rate: 15.0%)",
      "sourceIndex": 103,
      "sourceHtml": "Shuo He, <b>Lei Feng</b>, Fengmao Lv, Wen Li, Guowu Yang.<br/> <a href=\"https://dl.acm.org/doi/abs/10.1145/3534678.3539434\">Partial-Label Learning with Semantic Label Representations.</a><br/> <i>Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'22</b>)</i>, pp. 545–553, 2022.<br/> (Acceptance Rate: 15.0%)"
    },
    {
      "title": "Open-Sampling: Exploring Out-of-Distribution data for Re-balancing Long-tailed datasets.",
      "authorsHtml": "Hongxin Wei, Lue Tao, Renchunzi Xie, <b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 39th International Conference on Machine Learning (<b>ICML'22</b>)</i>, pp. 23615-23630, 2022.",
      "year": 2022,
      "url": "https://arxiv.org/pdf/2206.08802.pdf",
      "noteHtml": "",
      "sourceIndex": 104,
      "sourceHtml": "Hongxin Wei, Lue Tao, Renchunzi Xie, <b>Lei Feng</b>, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2206.08802.pdf\">Open-Sampling: Exploring Out-of-Distribution data for Re-balancing Long-tailed datasets.</a><br/> <i>Proceedings of the 39th International Conference on Machine Learning (<b>ICML'22</b>)</i>, pp. 23615-23630, 2022."
    },
    {
      "title": "Mitigating Neural Network Overconfidence with Logit Normalization.",
      "authorsHtml": "Hongxin Wei, Renchunzi Xie, Hao Cheng, <b>Lei Feng</b>, Bo An, Yixuan Li.",
      "venueHtml": "<i>Proceedings of the 39th International Conference on Machine Learning (<b>ICML'22</b>)</i>, pp. 23631-23644, 2022.",
      "year": 2022,
      "url": "https://arxiv.org/pdf/2205.09310.pdf",
      "noteHtml": "",
      "sourceIndex": 105,
      "sourceHtml": "Hongxin Wei, Renchunzi Xie, Hao Cheng, <b>Lei Feng</b>, Bo An, Yixuan Li.<br/> <a href=\"https://arxiv.org/pdf/2205.09310.pdf\">Mitigating Neural Network Overconfidence with Logit Normalization.</a><br/> <i>Proceedings of the 39th International Conference on Machine Learning (<b>ICML'22</b>)</i>, pp. 23631-23644, 2022."
    },
    {
      "title": "PiCO: Contrastive Label Disambiguation for Partial-Label Learning.",
      "authorsHtml": "Haobo Wang, Ruixuan Xiao, Yixuan Li, <b>Lei Feng</b>, Gang Niu, Gang Chen, Junbo Zhao.",
      "venueHtml": "<i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=EhYjZy6e1gJ",
      "noteHtml": "(<b>Outstanding Paper Honorable Mention, Acceptance Rate: &lt;3‰ (10/3391)</b>)",
      "sourceIndex": 106,
      "sourceHtml": "Haobo Wang, Ruixuan Xiao, Yixuan Li, <b>Lei Feng</b>, Gang Niu, Gang Chen, Junbo Zhao.<br/> <a href=\"https://openreview.net/pdf?id=EhYjZy6e1gJ\">PiCO: Contrastive Label Disambiguation for Partial-Label Learning.</a><br/> <i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022.<br/> (<b>Outstanding Paper Honorable Mention, Acceptance Rate: &lt;3‰ (10/3391)</b>)"
    },
    {
      "title": "Who Is Your Right Mixup Partner in Positive and Unlabeled Learning?",
      "authorsHtml": "Changchun Li, Ximing Li, <b>Lei Feng</b>, Jihong Ouyang.",
      "venueHtml": "<i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=NH29920YEmj",
      "noteHtml": "",
      "sourceIndex": 107,
      "sourceHtml": "Changchun Li, Ximing Li, <b>Lei Feng</b>, Jihong Ouyang.<br/> <a href=\"https://openreview.net/pdf?id=NH29920YEmj\">Who Is Your Right Mixup Partner in Positive and Unlabeled Learning?</a><br/> <i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022."
    },
    {
      "title": "Exploiting Class Activation Value for Partial-Label Learning.",
      "authorsHtml": "Fei Zhang, <b>Lei Feng*</b>, Bo Han*, Tongliang Liu, Gang Niu, Tao Qin, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=qqdXHUGec9h",
      "noteHtml": "",
      "sourceIndex": 108,
      "sourceHtml": "Fei Zhang, <b>Lei Feng*</b>, Bo Han*, Tongliang Liu, Gang Niu, Tao Qin, Masashi Sugiyama.<br/> <a href=\"https://openreview.net/pdf?id=qqdXHUGec9h\">Exploiting Class Activation Value for Partial-Label Learning.</a><br/> <i>Proceedings of the 10th International Conference on Learning Representations (<b>ICLR'22</b>)</i>, 2022."
    },
    {
      "title": "With False Friends Like These, Who Can Notice Mistakes?",
      "authorsHtml": "Lue Tao, <b>Lei Feng</b>, Jinfeng Yi, Songcan Chen.",
      "venueHtml": "<i>Proceedings of the 36th AAAI Conference on Artificial Intelligence (<b>AAAI'22</b>)</i>, pp. 8458-8466, 2022.",
      "year": 2022,
      "url": "https://arxiv.org/pdf/2012.14738.pdf",
      "noteHtml": "(Acceptance Rate: ~15%)",
      "sourceIndex": 109,
      "sourceHtml": "Lue Tao, <b>Lei Feng</b>, Jinfeng Yi, Songcan Chen.<br/> <a href=\"https://arxiv.org/pdf/2012.14738.pdf\">With False Friends Like These, Who Can Notice Mistakes?</a><br/> <i>Proceedings of the 36th AAAI Conference on Artificial Intelligence (<b>AAAI'22</b>)</i>, pp. 8458-8466, 2022.<br/> (Acceptance Rate: ~15%)"
    },
    {
      "title": "GearNet: Stepwise Dual Learning for Weakly Supervised Domain Adaptation.",
      "authorsHtml": "Renchunzi Xie, Hongxin Wei, <b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 36th AAAI Conference on Artificial Intelligence (<b>AAAI'22</b>)</i>, pp. 8717-8725, 2022.",
      "year": 2022,
      "url": "https://arxiv.org/pdf/2201.06001.pdf",
      "noteHtml": "(Acceptance Rate: ~15%)",
      "sourceIndex": 110,
      "sourceHtml": "Renchunzi Xie, Hongxin Wei, <b>Lei Feng</b>, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2201.06001.pdf\">GearNet: Stepwise Dual Learning for Weakly Supervised Domain Adaptation.</a><br/> <i>Proceedings of the 36th AAAI Conference on Artificial Intelligence (<b>AAAI'22</b>)</i>, pp. 8717-8725, 2022.<br/> (Acceptance Rate: ~15%)"
    },
    {
      "title": "SemiNLL: A Framework of Noisy-Label Learning by Semi-Supervised Learning.",
      "authorsHtml": "Zhuowei Wang, Jing Jiang, Bo Han, <b>Lei Feng*</b>, Bo An, Gang Niu, Guodong Long.",
      "venueHtml": "<i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2022.",
      "year": 2022,
      "url": "https://openreview.net/pdf?id=qzM1Tw5i7N",
      "noteHtml": "",
      "sourceIndex": 111,
      "sourceHtml": "Zhuowei Wang, Jing Jiang, Bo Han, <b>Lei Feng*</b>, Bo An, Gang Niu, Guodong Long. <br/> <a href=\"https://openreview.net/pdf?id=qzM1Tw5i7N\">SemiNLL: A Framework of Noisy-Label Learning by Semi-Supervised Learning.</a><br/> <i>Transactions on Machine Learning Research (<b>TMLR</b>)</i>, 2022."
    },
    {
      "title": "Regularized Matrix Factorization for Multi-Label Learning with Missing Labels.",
      "authorsHtml": "<b>Lei Feng</b>, Jun Huang, Senlin Shu, Bo An.",
      "venueHtml": "<i>IEEE Transactions on Cybernetics (<b>TCYB</b>)</i>, vol. 52, no. 5, pp. 3710-3721, 2022.",
      "year": 2022,
      "url": "https://ieeexplore.ieee.org/abstract/document/9198894",
      "noteHtml": "",
      "sourceIndex": 112,
      "sourceHtml": "<b>Lei Feng</b>, Jun Huang, Senlin Shu, Bo An.<br/> <a href=\"https://ieeexplore.ieee.org/abstract/document/9198894\">Regularized Matrix Factorization for Multi-Label Learning with Missing Labels.</a><br/> <i>IEEE Transactions on Cybernetics (<b>TCYB</b>)</i>, vol. 52, no. 5, pp. 3710-3721, 2022."
    },
    {
      "title": "Better Safe Than Sorry: Preventing Delusive Adversaries with Adversarial Training.",
      "authorsHtml": "Lue Tao, <b>Lei Feng</b>, Jinfeng Yi, Shengjun Huang, Songcan Chen.",
      "venueHtml": "<i>Proceedings of the 35th Conference on Neural Information Processing Systems (<b>NeurIPS'21</b>)</i>, pp. 16209-16225, 2021.",
      "year": 2021,
      "url": "https://arxiv.org/pdf/2102.04716.pdf",
      "noteHtml": "",
      "sourceIndex": 113,
      "sourceHtml": "Lue Tao, <b>Lei Feng</b>, Jinfeng Yi, Shengjun Huang, Songcan Chen.<br/> <a href=\"https://arxiv.org/pdf/2102.04716.pdf\">Better Safe Than Sorry: Preventing Delusive Adversaries with Adversarial Training.</a><br/> <i>Proceedings of the 35th Conference on Neural Information Processing Systems (<b>NeurIPS'21</b>)</i>, pp. 16209-16225, 2021."
    },
    {
      "title": "Rethinking Calibration of Deep Neural Networks: Do Not Be Afraid of Overconfidence.",
      "authorsHtml": "Dengbao Wang, <b>Lei Feng</b>, Minling Zhang.",
      "venueHtml": "<i>Proceedings of the 35th Conference on Neural Information Processing Systems (<b>NeurIPS'21</b>)</i>, pp. 11809-11820, 2021.",
      "year": 2021,
      "url": "https://openreview.net/pdf?id=NJS8kp15zzH",
      "noteHtml": "",
      "sourceIndex": 114,
      "sourceHtml": "Dengbao Wang, <b>Lei Feng</b>, Minling Zhang.<br/> <a href=\"https://openreview.net/pdf?id=NJS8kp15zzH\">Rethinking Calibration of Deep Neural Networks: Do Not Be Afraid of Overconfidence.</a><br/> <i>Proceedings of the 35th Conference on Neural Information Processing Systems (<b>NeurIPS'21</b>)</i>, pp. 11809-11820, 2021."
    },
    {
      "title": "Attention is not Enough: Mitigating the Distribution Discrepancy in Asynchronous Multimodal Sequence Fusion.",
      "authorsHtml": "Tao Liang, Guosheng Lin, <b>Lei Feng</b>, Yan Zhang, Fengmao Lv.",
      "venueHtml": "<i>Proceedings of the 18th International Conference on Computer Vision (<b>ICCV'21</b>)</i>, pp. 8148-8156, 2021.",
      "year": 2021,
      "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Liang_Attention_Is_Not_Enough_Mitigating_the_Distribution_Discrepancy_in_Asynchronous_ICCV_2021_paper.html",
      "noteHtml": "",
      "sourceIndex": 115,
      "sourceHtml": "Tao Liang, Guosheng Lin, <b>Lei Feng</b>, Yan Zhang, Fengmao Lv.<br/> <a href=\"https://openaccess.thecvf.com/content/ICCV2021/html/Liang_Attention_Is_Not_Enough_Mitigating_the_Distribution_Discrepancy_in_Asynchronous_ICCV_2021_paper.html\">Attention is not Enough: Mitigating the Distribution Discrepancy in Asynchronous Multimodal Sequence Fusion.</a><br/> <i>Proceedings of the 18th International Conference on Computer Vision (<b>ICCV'21</b>)</i>, pp. 8148-8156, 2021."
    },
    {
      "title": "Multiple-Instance Learning from Similar and Dissimilar Bags.",
      "authorsHtml": "<b>Lei Feng</b>, Senlin Shu, Yuzhou Cao, Lue Tao, Hongxin Wei, Tao Xiang, Bo An, Gang Niu.",
      "venueHtml": "<i>Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'21</b>)</i>, pp. 374-382, 2021.",
      "year": 2021,
      "url": "https://dl.acm.org/doi/abs/10.1145/3447548.3467318",
      "noteHtml": "(Acceptance Rate: 15.4%)",
      "sourceIndex": 116,
      "sourceHtml": "<b>Lei Feng</b>, Senlin Shu, Yuzhou Cao, Lue Tao, Hongxin Wei, Tao Xiang, Bo An, Gang Niu.<br/> <a href=\"https://dl.acm.org/doi/abs/10.1145/3447548.3467318\">Multiple-Instance Learning from Similar and Dissimilar Bags.</a><br/> <i>Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD'21</b>)</i>, pp. 374-382, 2021.<br/> (Acceptance Rate: 15.4%)"
    },
    {
      "title": "Pointwise Binary Classification with Pairwise Confidence Comparisons.",
      "authorsHtml": "<b>Lei Feng</b>, Senlin Shu, Nan Lu, Bo Han, Miao Xu, Gang Niu, Bo An, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 38th International Conference on Machine Learning (<b>ICML'21</b>)</i>, pp. 3252-3262, 2021.",
      "year": 2021,
      "url": "https://arxiv.org/pdf/2010.01875.pdf",
      "noteHtml": "",
      "sourceIndex": 117,
      "sourceHtml": "<b>Lei Feng</b>, Senlin Shu, Nan Lu, Bo Han, Miao Xu, Gang Niu, Bo An, Masashi Sugiyama.<br/> <a href=\"https://arxiv.org/pdf/2010.01875.pdf\">Pointwise Binary Classification with Pairwise Confidence Comparisons.</a><br/> <i>Proceedings of the 38th International Conference on Machine Learning (<b>ICML'21</b>)</i>, pp. 3252-3262, 2021."
    },
    {
      "title": "Learning from Similarity-Confidence Data.",
      "authorsHtml": "Yuzhou Cao, <b>Lei Feng</b>, Yitian Xu, Bo An, Gang Niu, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 38th International Conference on Machine Learning (<b>ICML'21</b>)</i>, pp. 1272-1282, 2021.",
      "year": 2021,
      "url": "https://proceedings.mlr.press/v139/cao21b/cao21b.pdf",
      "noteHtml": "",
      "sourceIndex": 118,
      "sourceHtml": "Yuzhou Cao, <b>Lei Feng</b>, Yitian Xu, Bo An, Gang Niu, Masashi Sugiyama.<br/> <a href=\"https://proceedings.mlr.press/v139/cao21b/cao21b.pdf\">Learning from Similarity-Confidence Data.</a><br/> <i>Proceedings of the 38th International Conference on Machine Learning (<b>ICML'21</b>)</i>, pp. 1272-1282, 2021."
    },
    {
      "title": "Learning from Complementary Labels via Partial-Output Consistency Regularization.",
      "authorsHtml": "Dengbao Wang, <b>Lei Feng</b>, Minling Zhang.",
      "venueHtml": "<i>Proceedings of the 30th International Joint Conference on Artificial Intelligence (<b>IJCAI'21</b>)</i>, pp. 3075-3081, 2021.",
      "year": 2021,
      "url": "https://www.ijcai.org/proceedings/2021/423",
      "noteHtml": "(Acceptance Rate: 13.9%)",
      "sourceIndex": 119,
      "sourceHtml": "Dengbao Wang, <b>Lei Feng</b>, Minling Zhang.<br/> <a href=\"https://www.ijcai.org/proceedings/2021/423\">Learning from Complementary Labels via Partial-Output Consistency Regularization.</a><br/> <i>Proceedings of the 30th International Joint Conference on Artificial Intelligence (<b>IJCAI'21</b>)</i>, pp. 3075-3081, 2021.<br/> (Acceptance Rate: 13.9%)"
    },
    {
      "title": "Embedding-augmented generalized matrix factorization for recommendation with implicit feedback.",
      "authorsHtml": "<b>Lei Feng</b>, Hongxin Wei, Qingyu Guo, Zhuoyi Lin, Bo An.",
      "venueHtml": "<i>IEEE Intelligent Systems</i>, Vol. 36, No. 6, pp. 32-41, 2021.",
      "year": 2021,
      "url": "https://ieeexplore.ieee.org/document/9252133",
      "noteHtml": "",
      "sourceIndex": 120,
      "sourceHtml": "<b>Lei Feng</b>, Hongxin Wei, Qingyu Guo, Zhuoyi Lin, Bo An.<br/> <a href=\"https://ieeexplore.ieee.org/document/9252133\">Embedding-augmented generalized matrix factorization for recommendation with implicit feedback.</a><br/> <i>IEEE Intelligent Systems</i>, Vol. 36, No. 6, pp. 32-41, 2021."
    },
    {
      "title": "GLIMG: Global and Local Item Graphs for Recommender Systems.",
      "authorsHtml": "Zhuoyi Lin, <b>Lei Feng*</b>, Rui Yin, Chi Xu, Chee-Keong Kwoh.",
      "venueHtml": "<i>Information Sciences</i>, Vol. 580, pp. 1-14, 2021.",
      "year": 2021,
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0020025521008185",
      "noteHtml": "",
      "sourceIndex": 121,
      "sourceHtml": "Zhuoyi Lin, <b>Lei Feng*</b>, Rui Yin, Chi Xu, Chee-Keong Kwoh.<br/> <a href=\"https://www.sciencedirect.com/science/article/abs/pii/S0020025521008185\">GLIMG: Global and Local Item Graphs for Recommender Systems.</a><br/> <i>Information Sciences</i>, Vol. 580, pp. 1-14, 2021."
    },
    {
      "title": "Partial Multi-Label Learning with Mutual Teaching.",
      "authorsHtml": "Yan Yan, Shining Li, <b>Lei Feng*</b>.",
      "venueHtml": "<i>Knowledge-Based Systems</i>, vol. 212, pp. 106624, 2021.",
      "year": 2021,
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S095070512030753X",
      "noteHtml": "",
      "sourceIndex": 122,
      "sourceHtml": "Yan Yan, Shining Li, <b>Lei Feng*</b>.<br/> <a href=\"https://www.sciencedirect.com/science/article/abs/pii/S095070512030753X\">Partial Multi-Label Learning with Mutual Teaching.</a><br/> <i>Knowledge-Based Systems</i>, vol. 212, pp. 106624, 2021."
    },
    {
      "title": "Provably Consistent Partial-Label Learning.",
      "authorsHtml": "<b>Lei Feng</b>, Jiaqi Lv, Bo Han, Miao Xu, Gang Niu, Xin Geng, Bo An, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 34th Conference on Neural Information Processing Systems (<b>NeurIPS'20</b>)</i>, pp. 10948-10960, 2020.",
      "year": 2020,
      "url": "https://arxiv.org/pdf/2007.08929.pdf",
      "noteHtml": "",
      "sourceIndex": 123,
      "sourceHtml": "<b>Lei Feng</b>, Jiaqi Lv, Bo Han, Miao Xu, Gang Niu, Xin Geng, Bo An, Masashi Sugiyama.<br/> <a href=\"https://arxiv.org/pdf/2007.08929.pdf\">Provably Consistent Partial-Label Learning.</a><br/> <i>Proceedings of the 34th Conference on Neural Information Processing Systems (<b>NeurIPS'20</b>)</i>, pp. 10948-10960, 2020."
    },
    {
      "title": "Learning with Multiple Complementary Labels.",
      "authorsHtml": "<b>Lei Feng*</b>†, Takuo Kaneko†, Bo Han, Gang Niu, Bo An, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 37th International Conference on Machine Learning (<b>ICML'20</b>)</i>, pp. 3072-3081, 2020.",
      "year": 2020,
      "url": "https://arxiv.org/pdf/1912.12927.pdf",
      "noteHtml": "",
      "sourceIndex": 124,
      "sourceHtml": "<b>Lei Feng*</b>†, Takuo Kaneko†, Bo Han, Gang Niu, Bo An, Masashi Sugiyama.<br/> <a href=\"https://arxiv.org/pdf/1912.12927.pdf\">Learning with Multiple Complementary Labels.</a><br/> <i>Proceedings of the 37th International Conference on Machine Learning (<b>ICML'20</b>)</i>, pp. 3072-3081, 2020."
    },
    {
      "title": "Progressive Identification of True Labels for Partial-Label Learning.",
      "authorsHtml": "Jiaqi Lv, Miao Xu, <b>Lei Feng</b>, Gang Niu, Xin Geng, Masashi Sugiyama.",
      "venueHtml": "<i>Proceedings of the 37th International Conference on Machine Learning (<b>ICML'20</b>)</i>, pp. 6500-6510, 2020.",
      "year": 2020,
      "url": "https://arxiv.org/pdf/2002.08053.pdf",
      "noteHtml": "",
      "sourceIndex": 125,
      "sourceHtml": "Jiaqi Lv, Miao Xu, <b>Lei Feng</b>, Gang Niu, Xin Geng, Masashi Sugiyama.<br/> <a href=\"https://arxiv.org/pdf/2002.08053.pdf\">Progressive Identification of True Labels for Partial-Label Learning.</a><br/> <i>Proceedings of the 37th International Conference on Machine Learning (<b>ICML'20</b>)</i>, pp. 6500-6510, 2020."
    },
    {
      "title": "Can Cross Entropy Loss Be Robust to Label Noise?",
      "authorsHtml": "<b>Lei Feng</b>, Senlin Shu, Zhuoyi Lin, Fengmao Lv, Li Li, Bo An.",
      "venueHtml": "<i>Proceedings of the 29th International Joint Conference on Artificial Intelligence (<b>IJCAI'20</b>)</i>, pp. 2206-2212, 2020.",
      "year": 2020,
      "url": "https://www.ijcai.org/proceedings/2020/0305.pdf",
      "noteHtml": "(Acceptance Rate: 12.6%)",
      "sourceIndex": 126,
      "sourceHtml": "<b>Lei Feng</b>, Senlin Shu, Zhuoyi Lin, Fengmao Lv, Li Li, Bo An.<br/> <a href=\"https://www.ijcai.org/proceedings/2020/0305.pdf\">Can Cross Entropy Loss Be Robust to Label Noise?</a><br/> <i>Proceedings of the 29th International Joint Conference on Artificial Intelligence (<b>IJCAI'20</b>)</i>, pp. 2206-2212, 2020.<br/> (Acceptance Rate: 12.6%)"
    },
    {
      "title": "Discovering Latent Class Labels for Multi-Label Learning.",
      "authorsHtml": "Jun Huang*, Linchuan Xu, Jing Wang, <b>Lei Feng*</b>, Kenji Yamanishi.",
      "venueHtml": "<i>Proceedings of the 29th International Joint Conference on Artificial Intelligence (<b>IJCAI'20</b>)</i>, pp. 3058-3064, 2020.",
      "year": 2020,
      "url": "https://www.ijcai.org/proceedings/2020/423",
      "noteHtml": "(Acceptance Rate: 12.6%)",
      "sourceIndex": 127,
      "sourceHtml": "Jun Huang*, Linchuan Xu, Jing Wang, <b>Lei Feng*</b>, Kenji Yamanishi.<br/> <a href=\"https://www.ijcai.org/proceedings/2020/423\">Discovering Latent Class Labels for Multi-Label Learning.</a><br/> <i>Proceedings of the 29th International Joint Conference on Artificial Intelligence (<b>IJCAI'20</b>)</i>, pp. 3058-3064, 2020.<br/> (Acceptance Rate: 12.6%)"
    },
    {
      "title": "Combating Noisy Labels by Agreement: A Joint Training Method with Co-Regularization.",
      "authorsHtml": "Hongxin Wei, <b>Lei Feng*</b>, Xiangyu Chen, Bo An.",
      "venueHtml": "<i>Proceedings of the 38th IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'20</b>)</i>, pp. 13726-13735, 2020.",
      "year": 2020,
      "url": "https://arxiv.org/pdf/2003.02752.pdf",
      "noteHtml": "",
      "sourceIndex": 128,
      "sourceHtml": "Hongxin Wei, <b>Lei Feng*</b>, Xiangyu Chen, Bo An.<br/> <a href=\"https://arxiv.org/pdf/2003.02752.pdf\">Combating Noisy Labels by Agreement: A Joint Training Method with Co-Regularization.</a><br/> <i>Proceedings of the 38th IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'20</b>)</i>, pp. 13726-13735, 2020."
    },
    {
      "title": "Partial Label Learning by Semantic Difference Maximization.",
      "authorsHtml": "<b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 28th International Joint Conference on Artificial Intelligence (<b>IJCAI'19</b>)</i>, pp. 2294-2300, 2019.",
      "year": 2019,
      "url": "https://www.ijcai.org/proceedings/2019/318",
      "noteHtml": "(Acceptance Rate: 17.9%)",
      "sourceIndex": 129,
      "sourceHtml": "<b>Lei Feng</b>, Bo An.<br/> <a href=\"https://www.ijcai.org/proceedings/2019/318\">Partial Label Learning by Semantic Difference Maximization.</a><br/> <i>Proceedings of the 28th International Joint Conference on Artificial Intelligence (<b>IJCAI'19</b>)</i>, pp. 2294-2300, 2019.<br/> (Acceptance Rate: 17.9%)"
    },
    {
      "title": "Collaboration based Multi-Label Learning.",
      "authorsHtml": "<b>Lei Feng</b>, Bo An, Shuo He.",
      "venueHtml": "<i>Proceedings of the 33rd AAAI Conference on Artificial Intelligence (<b>AAAI'19</b>)</i>, pp. 3550-3557, 2019.",
      "year": 2019,
      "url": "https://arxiv.org/pdf/1902.03047.pdf",
      "noteHtml": "(Acceptance Rate: 16.2%)",
      "sourceIndex": 130,
      "sourceHtml": "<b>Lei Feng</b>, Bo An, Shuo He.<br/> <a href=\"https://arxiv.org/pdf/1902.03047.pdf\">Collaboration based Multi-Label Learning.</a><br/> <i>Proceedings of the 33rd AAAI Conference on Artificial Intelligence (<b>AAAI'19</b>)</i>, pp. 3550-3557, 2019.<br/> (Acceptance Rate: 16.2%)"
    },
    {
      "title": "Partial Label Learning with Self-Guided Retraining.",
      "authorsHtml": "<b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 33rd AAAI Conference on Artificial Intelligence (<b>AAAI'19</b>)</i>, pp. 3542-3549, 2019.",
      "year": 2019,
      "url": "https://ojs.aaai.org/index.php/AAAI/article/view/4233",
      "noteHtml": "(Acceptance Rate: 16.2%)",
      "sourceIndex": 131,
      "sourceHtml": "<b>Lei Feng</b>, Bo An.<br/> <a href=\"https://ojs.aaai.org/index.php/AAAI/article/view/4233\">Partial Label Learning with Self-Guided Retraining.</a><br/> <i>Proceedings of the 33rd AAAI Conference on Artificial Intelligence (<b>AAAI'19</b>)</i>, pp. 3542-3549, 2019.<br/> (Acceptance Rate: 16.2%)"
    },
    {
      "title": "Estimating Latent Relative Labeling Importances for Multi-Label Learning.",
      "authorsHtml": "Shuo He, <b>Lei Feng</b>, Li Li.",
      "venueHtml": "<i>Proceedings of the 18th IEEE International Conference on Data Mining (<b>ICDM'18</b>)</i>, pp. 1013-1018, 2018.",
      "year": 2018,
      "url": "https://ieeexplore.ieee.org/document/8594936",
      "noteHtml": "(Acceptance Rate: 19.9%)",
      "sourceIndex": 132,
      "sourceHtml": "Shuo He, <b>Lei Feng</b>, Li Li.<br/> <a href=\"https://ieeexplore.ieee.org/document/8594936\">Estimating Latent Relative Labeling Importances for Multi-Label Learning.</a> <br/> <i>Proceedings of the 18th IEEE International Conference on Data Mining (<b>ICDM'18</b>)</i>, pp. 1013-1018, 2018.<br/> (Acceptance Rate: 19.9%)"
    },
    {
      "title": "Leveraging Latent Label Distributions for Partial Label Learning.",
      "authorsHtml": "<b>Lei Feng</b>, Bo An.",
      "venueHtml": "<i>Proceedings of the 27th International Joint Conference on Artificial Intelligence (<b>IJCAI'18</b>)</i>, pp. 2107-2113, 2018.",
      "year": 2018,
      "url": "https://www.ijcai.org/proceedings/2018/291",
      "noteHtml": "(Acceptance Rate: 20.5%)",
      "sourceIndex": 133,
      "sourceHtml": "<b>Lei Feng</b>, Bo An.<br/> <a href=\"https://www.ijcai.org/proceedings/2018/291\">Leveraging Latent Label Distributions for Partial Label Learning.</a><br/> <i>Proceedings of the 27th International Joint Conference on Artificial Intelligence (<b>IJCAI'18</b>)</i>, pp. 2107-2113, 2018.<br/> (Acceptance Rate: 20.5%)"
    }
  ],
  "publicationLegendHtml": "* Corresponding author; &dagger; Equal contribution",
  "services": [
    {
      "title": "Workshop / Tutorial / Challenge Organizer",
      "html": "<ul> <li><p> <a href=\"https://wsl-workshop.github.io/wsl25.html\">International Workshop on Weakly Supervised Learning 2025</a> </p></li> <li><p> <a href=\"https://wsl-workshop.github.io/acml22.html\">ACML 2022 Workshop on Weakly Supervised Learning</a> </p></li> <li><p> <a href=\"https://wsl-workshop.github.io/acml21.html\">ACML 2021 Workshop on Weakly Supervised Learning</a> </p></li> </ul>",
      "items": [
        {
          "text": "International Workshop on Weakly Supervised Learning 2025",
          "html": "<a href=\"https://wsl-workshop.github.io/wsl25.html\">International Workshop on Weakly Supervised Learning 2025</a>"
        },
        {
          "text": "ACML 2022 Workshop on Weakly Supervised Learning",
          "html": "<a href=\"https://wsl-workshop.github.io/acml22.html\">ACML 2022 Workshop on Weakly Supervised Learning</a>"
        },
        {
          "text": "ACML 2021 Workshop on Weakly Supervised Learning",
          "html": "<a href=\"https://wsl-workshop.github.io/acml21.html\">ACML 2021 Workshop on Weakly Supervised Learning</a>"
        }
      ]
    },
    {
      "title": "Conference Area Chair",
      "html": "<ul> <li><p> International Conference on Machine Learning (ICML): 2025, 2026, 2027 </p></li> <li><p> International Conference on Learning Representations (ICLR): 2025, 2026, 2027 </p></li> <li><p> Annual Conference on Neural Information Processing Systems (NeurIPS): 2024, 2025, 2026 </p></li> <li><p> AAAI Conference on Artificial Intelligence (AAAI): 2026, 2027 </p></li> <li><p> International Joint Conference on Artificial Intelligence (IJCAI): 2025, 2026 </p></li> </ul>",
      "items": [
        {
          "text": "International Conference on Machine Learning (ICML): 2025, 2026, 2027",
          "html": "International Conference on Machine Learning (ICML): 2025, 2026, 2027"
        },
        {
          "text": "International Conference on Learning Representations (ICLR): 2025, 2026, 2027",
          "html": "International Conference on Learning Representations (ICLR): 2025, 2026, 2027"
        },
        {
          "text": "Annual Conference on Neural Information Processing Systems (NeurIPS): 2024, 2025, 2026",
          "html": "Annual Conference on Neural Information Processing Systems (NeurIPS): 2024, 2025, 2026"
        },
        {
          "text": "AAAI Conference on Artificial Intelligence (AAAI): 2026, 2027",
          "html": "AAAI Conference on Artificial Intelligence (AAAI): 2026, 2027"
        },
        {
          "text": "International Joint Conference on Artificial Intelligence (IJCAI): 2025, 2026",
          "html": "International Joint Conference on Artificial Intelligence (IJCAI): 2025, 2026"
        }
      ]
    },
    {
      "title": "Conference Senior Program Committee Member",
      "html": "<ul> <li><p> AAAI Conference on Artificial Intelligence (AAAI): 2022 </p></li> <li><p> International Joint Conference on Artificial Intelligence (IJCAI): 2021, 2023, 2024 </p></li> </ul>",
      "items": [
        {
          "text": "AAAI Conference on Artificial Intelligence (AAAI): 2022",
          "html": "AAAI Conference on Artificial Intelligence (AAAI): 2022"
        },
        {
          "text": "International Joint Conference on Artificial Intelligence (IJCAI): 2021, 2023, 2024",
          "html": "International Joint Conference on Artificial Intelligence (IJCAI): 2021, 2023, 2024"
        }
      ]
    },
    {
      "title": "Journal Editorial Board",
      "html": "<ul> <li><p>Action Editor, Neural Networks, Jan 2025 - Present </p></li> <li><p>Action Editor, Transactions on Machine Learning Research (TMLR), Jan 2025 - Present </p></li> </ul>",
      "items": [
        {
          "text": "Action Editor, Neural Networks, Jan 2025 - Present",
          "html": "Action Editor, Neural Networks, Jan 2025 - Present"
        },
        {
          "text": "Action Editor, Transactions on Machine Learning Research (TMLR), Jan 2025 - Present",
          "html": "Action Editor, Transactions on Machine Learning Research (TMLR), Jan 2025 - Present"
        }
      ]
    },
    {
      "title": "Conference Program Committee Member (Reviewer)",
      "html": "<ul> <li><p> International Conference on Machine Learning (ICML): 2021 (expert reviewer), 2022, 2023, 2024 </p></li> <li><p> Annual Conference on Neural Information Processing Systems (NeurIPS): 2020 (top 10% reviewer), 2021, 2022, 2023 </p></li> <li><p> IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR): 2021, 2022, 2023, 2024 </p></li> <li><p> ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD): 2021, 2022, 2023, 2024 </p></li> <li><p> International Conference on Computer Vision (ICCV): 2021, 2023 </p></li> <li><p> European Conference on Computer Vision (ECCV): 2024 </p></li> <li><p> International Conference on Learning Representations (ICLR): 2021, 2022, 2023, 2024 </p></li> <li><p> AAAI Conference on Artificial Intelligence (AAAI): 2020, 2021, 2023, 2024 </p></li> <li><p> Internation Joint Conference on Artificial Intelligence (IJCAI): 2022 </p></li> <li><p> International Conference on Artificial Intelligence and Statistics (AISTATS): 2022, 2023 </p></li> <li><p> SIAM International Conference on Data Mining (SDM): 2022 </p></li> <li><p> Asian Conference on Machine Learning (ACML): 2021, 2022 </p></li> </ul>",
      "items": [
        {
          "text": "International Conference on Machine Learning (ICML): 2021 (expert reviewer), 2022, 2023, 2024",
          "html": "International Conference on Machine Learning (ICML): 2021 (expert reviewer), 2022, 2023, 2024"
        },
        {
          "text": "Annual Conference on Neural Information Processing Systems (NeurIPS): 2020 (top 10% reviewer), 2021, 2022, 2023",
          "html": "Annual Conference on Neural Information Processing Systems (NeurIPS): 2020 (top 10% reviewer), 2021, 2022, 2023"
        },
        {
          "text": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR): 2021, 2022, 2023, 2024",
          "html": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR): 2021, 2022, 2023, 2024"
        },
        {
          "text": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD): 2021, 2022, 2023, 2024",
          "html": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD): 2021, 2022, 2023, 2024"
        },
        {
          "text": "International Conference on Computer Vision (ICCV): 2021, 2023",
          "html": "International Conference on Computer Vision (ICCV): 2021, 2023"
        },
        {
          "text": "European Conference on Computer Vision (ECCV): 2024",
          "html": "European Conference on Computer Vision (ECCV): 2024"
        },
        {
          "text": "International Conference on Learning Representations (ICLR): 2021, 2022, 2023, 2024",
          "html": "International Conference on Learning Representations (ICLR): 2021, 2022, 2023, 2024"
        },
        {
          "text": "AAAI Conference on Artificial Intelligence (AAAI): 2020, 2021, 2023, 2024",
          "html": "AAAI Conference on Artificial Intelligence (AAAI): 2020, 2021, 2023, 2024"
        },
        {
          "text": "Internation Joint Conference on Artificial Intelligence (IJCAI): 2022",
          "html": "Internation Joint Conference on Artificial Intelligence (IJCAI): 2022"
        },
        {
          "text": "International Conference on Artificial Intelligence and Statistics (AISTATS): 2022, 2023",
          "html": "International Conference on Artificial Intelligence and Statistics (AISTATS): 2022, 2023"
        },
        {
          "text": "SIAM International Conference on Data Mining (SDM): 2022",
          "html": "SIAM International Conference on Data Mining (SDM): 2022"
        },
        {
          "text": "Asian Conference on Machine Learning (ACML): 2021, 2022",
          "html": "Asian Conference on Machine Learning (ACML): 2021, 2022"
        }
      ]
    },
    {
      "title": "Journal Reviewer",
      "html": "<ul> <li><p> Nature Machine Intelligence (NMI) </p></li> <li><p> Journal of Machine Learning Research (JMLR) </p></li> <li><p> IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) </p></li> <li><p> Artificial Intelligence (AIJ) </p></li> <li><p> ACM Computing Surveys (CSUR) </p></li> <li><p> IEEE Transactions on Knowledge and Data Engineering (TKDE) </p></li> <li><p> IEEE Transactions on Image Processing (TIP) </p></li> <li><p> Machine Learning (MLJ) </p></li> <li><p> IEEE Transactions on Neural Networks and Learning Systems (TNNLS) </p></li> <li><p> IEEE Transactions on Cybernetics (TCYB) </p></li> <li><p> IEEE Transactions on Multimedia (TMM) </p></li> <li><p> IEEE Transactions on Circuits and Systems for Video Technology (TCSVT) </p></li> <li><p> IEEE Intelligent Systems (IS) </p></li> <li><p> Knowledge and Information Systems (KAIS) </p></li> <li><p> Knowledge-Based Systems (KBS) </p></li> <li><p> International Journal of Intelligent Systems (IJIS) </p></li> <li><p> Expert Systems with Applications (ESWA) </p></li> <li><p> Applied Intelligence (APIN) </p></li> <li><p> Annals of Mathematics and Artificial Intelligence (AMAI) </p></li> </ul>",
      "items": [
        {
          "text": "Nature Machine Intelligence (NMI)",
          "html": "Nature Machine Intelligence (NMI)"
        },
        {
          "text": "Journal of Machine Learning Research (JMLR)",
          "html": "Journal of Machine Learning Research (JMLR)"
        },
        {
          "text": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
          "html": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)"
        },
        {
          "text": "Artificial Intelligence (AIJ)",
          "html": "Artificial Intelligence (AIJ)"
        },
        {
          "text": "ACM Computing Surveys (CSUR)",
          "html": "ACM Computing Surveys (CSUR)"
        },
        {
          "text": "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
          "html": "IEEE Transactions on Knowledge and Data Engineering (TKDE)"
        },
        {
          "text": "IEEE Transactions on Image Processing (TIP)",
          "html": "IEEE Transactions on Image Processing (TIP)"
        },
        {
          "text": "Machine Learning (MLJ)",
          "html": "Machine Learning (MLJ)"
        },
        {
          "text": "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
          "html": "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)"
        },
        {
          "text": "IEEE Transactions on Cybernetics (TCYB)",
          "html": "IEEE Transactions on Cybernetics (TCYB)"
        },
        {
          "text": "IEEE Transactions on Multimedia (TMM)",
          "html": "IEEE Transactions on Multimedia (TMM)"
        },
        {
          "text": "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
          "html": "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)"
        },
        {
          "text": "IEEE Intelligent Systems (IS)",
          "html": "IEEE Intelligent Systems (IS)"
        },
        {
          "text": "Knowledge and Information Systems (KAIS)",
          "html": "Knowledge and Information Systems (KAIS)"
        },
        {
          "text": "Knowledge-Based Systems (KBS)",
          "html": "Knowledge-Based Systems (KBS)"
        },
        {
          "text": "International Journal of Intelligent Systems (IJIS)",
          "html": "International Journal of Intelligent Systems (IJIS)"
        },
        {
          "text": "Expert Systems with Applications (ESWA)",
          "html": "Expert Systems with Applications (ESWA)"
        },
        {
          "text": "Applied Intelligence (APIN)",
          "html": "Applied Intelligence (APIN)"
        },
        {
          "text": "Annals of Mathematics and Artificial Intelligence (AMAI)",
          "html": "Annals of Mathematics and Artificial Intelligence (AMAI)"
        }
      ]
    }
  ],
  "education": [
    {
      "title": "Ph.D. in Computer Science. Nanyang Technological University, Singapore (Aug 2017 - Dec 2020)",
      "text": "Ph.D. in Computer Science. Nanyang Technological University, Singapore (Aug 2017 - Dec 2020) Submitted thesis in Aug 2020, left NTU in Dec 2020, defended thesis in Jan 2021, received degree in Feb 2021. NTU SCSE Outstanding PhD Thesis Award Runner-Up (in the situation of early graduation). Supervised by Prof. Bo An .",
      "html": "<p><b>Ph.D.</b> in Computer Science. Nanyang Technological University, Singapore (Aug 2017 - Dec 2020)</p> Submitted thesis in Aug 2020, left NTU in Dec 2020, defended thesis in Jan 2021, received degree in Feb 2021.<br/> NTU SCSE Outstanding PhD Thesis Award Runner-Up (in the situation of early graduation). Supervised by <a href=\"https://personal.ntu.edu.sg/boan/\">Prof. Bo An</a>."
    },
    {
      "title": "B.E. in Computer Science. Southwest University, Chongqing, China (Sep 2013 - Jul 2017)",
      "text": "B.E. in Computer Science. Southwest University, Chongqing, China (Sep 2013 - Jul 2017) Outstanding Graduate of Southwest University.",
      "html": "<p><b>B.E.</b> in Computer Science. Southwest University, Chongqing, China (Sep 2013 - Jul 2017)</p> Outstanding Graduate of Southwest University."
    }
  ],
  "honors": [
    {
      "title": "EMNLP 2026 SAC Highlight Award.",
      "year": 2026,
      "text": "EMNLP 2026 SAC Highlight Award.",
      "html": "EMNLP 2026 SAC Highlight Award.",
      "source": "User-provided update, 2026-11-02"
    },
    {
      "title": "World’s Top 2% Scientists.",
      "year": 2026,
      "period": "2025–2026",
      "text": "World’s Top 2% Scientists.",
      "html": "World’s Top 2% Scientists.",
      "source": "User-provided update, 2026-10-28"
    },
    {
      "title": "WAIC 2024 Youth Outstanding Paper Nomination Award.",
      "year": 2024,
      "text": "WAIC 2024 Youth Outstanding Paper Nomination Award.",
      "html": "WAIC 2024 Youth Outstanding Paper Nomination Award."
    },
    {
      "title": "Asia-Pacific Leaders Under 30 in 2024.",
      "year": 2024,
      "text": "Asia-Pacific Leaders Under 30 in 2024.",
      "html": "Asia-Pacific Leaders Under 30 in 2024."
    },
    {
      "title": "Forbes 30 Under 30 Asia.",
      "year": 2022,
      "text": "Forbes 30 Under 30 Asia.",
      "html": "Forbes 30 Under 30 Asia."
    },
    {
      "title": "Champion in the Learning and Mining with Noisy Labels Challenge at IJCAI-ECAI 2022.",
      "year": 2022,
      "text": "Champion in the Learning and Mining with Noisy Labels Challenge at IJCAI-ECAI 2022.",
      "html": "Champion in the Learning and Mining with Noisy Labels Challenge at IJCAI-ECAI 2022."
    },
    {
      "title": "Chongqing Youth Pioneer in Science and Technology Innovation.",
      "year": 2022,
      "text": "Chongqing Youth Pioneer in Science and Technology Innovation.",
      "html": "Chongqing Youth Pioneer in Science and Technology Innovation."
    },
    {
      "title": "ICLR 2022 Outstanding Paper Award Honorable Mention.",
      "year": 2022,
      "text": "ICLR 2022 Outstanding Paper Award Honorable Mention.",
      "html": "ICLR 2022 Outstanding Paper Award Honorable Mention."
    },
    {
      "title": "Forbes 30 Under 30 China.",
      "year": 2021,
      "text": "Forbes 30 Under 30 China.",
      "html": "Forbes 30 Under 30 China."
    },
    {
      "title": "NTU SCSE Outstanding PhD Thesis Award Runner-up (in the situation of early graduation).",
      "year": 2021,
      "text": "NTU SCSE Outstanding PhD Thesis Award Runner-up (in the situation of early graduation).",
      "html": "NTU SCSE Outstanding PhD Thesis Award Runner-up (in the situation of early graduation)."
    }
  ],
  "sourceMeta": {
    "revision": "59eaac5aaa1f2b53fc3b81a7a76bd51a4b62dec9",
    "files": [
      "index.html",
      "research.html",
      "services.html"
    ],
    "note": "Migrated from visible local HTML only; commented-out content was excluded.",
    "userUpdates": {
      "date": "2026-10-28",
      "research": "Organized into three main directions at the owner's request: AI Agents, Agentic RL, and AI Security. Tool use, planning, world models, dialogue, and memory are included within AI Agents. Representative works and under-review labels are retained, with one work per list item.",
      "honor": "2025–2026 World’s Top 2% Scientists, supplied by the site owner",
      "team": "32 members transcribed from the user-provided screenshot, preserving row order",
      "teamLayoutUpdated": "2026-10-29",
      "pastMembers": "2026-10-29: preserved the current page entries for Yonghua Zhu (Postdoctoral Researcher @ SUTD → Professor @ Shanxi University) and Zongqian Wu (CSC Visiting PhD @ SUTD → Research Fellow @ NUS), and added the owner-supplied Jincheng Huang (CSC Visiting PhD @ SUTD → Research Scientist @ SMU). Team subgroup headings display English only.",
      "researchUpdated": "2026-10-29",
      "publicationAwards": "The owner supplied SAC Highlight Award for publication 6 and requested moving Outstanding Paper Honorable Mention for publication 106 to its venue line on 2026-10-29.",
      "researchLayout": "2026-10-29: three illustrated modules, side by side on desktop and stacked on mobile. Each displays its overview and three representative works. The Research details and More representative work blocks were removed at the owner's request. Longer descriptions and additional works are retained only as source data.",
      "pastMembersAdded": {
        "date": "2026-10-29",
        "names": [
          "Senlin Shu",
          "Xin Cheng",
          "Zixi Wei",
          "Shengjie Zhou",
          "Zhifang Zhang",
          "Yuwei Niu",
          "Shiyu Tian"
        ],
        "source": "Names, former roles, and destinations supplied by the site owner."
      },
      "pastMembersAdditional": {
        "date": "2026-10-29",
        "names": [
          "Suqin Yuan",
          "Zongyu Wu"
        ],
        "source": "Former roles and PhD destinations supplied by the site owner."
      },
      "pastMembersOrder": "Suqin Yuan immediately precedes Zhifang Zhang; Zongyu Wu immediately follows Zhifang Zhang; Shiyu Tian immediately precedes Yuwei Niu. Member details are preserved.",
      "publicationLinks": "2026-10-29: filled the 16 previously missing publication URLs with 13 verified arXiv records and 3 official conference pages. Existing titles, author lists, venues and awards were retained.",
      "jiahanZhang": "Owner-supplied Past Members addition: Jiahan Zhang, RA @ NTU 2023-2024 → PhD @ Johns Hopkins University.",
      "representativeWorksExpanded": "2026-10-29: displayed all prepared representative works directly under the three illustrated modules, with original lead publications first, followed by other published work and manuscripts under review. Included foundational LLM reasoning and continual learning, the October PPT's ASGPO/DepGPO/SCA manuscripts, and additional published security/robustness/privacy works. Earlier replacement of paper 31 by paper 30 remains respected. No disclosure controls were reintroduced.",
      "representativeVisibility": "2026-10-29: representative works display published papers and title/author-verified arXiv preprints with arXiv identifiers only. Under-review-only ATOA, SimPatch, Conditioning the Write and ASGPO are not displayed. Module numeric prefixes, the personal GitHub contact link, and the review-invitation email row were removed at the owner's request."
    },
    "researchSources": [
      {
        "id": "rl-report-2026-09-03",
        "slides": 17,
        "file": "20260903大模型智能体的强化学习前沿技术_学术报告_冯磊.pptx"
      },
      {
        "id": "agent-summary-2026-10-18",
        "slides": 14,
        "file": "20261018Agent方向研究工作总结.pptx"
      }
    ],
    "publicationLinkChecks": [
      {
        "sourceIndex": 1,
        "title": "Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents.",
        "url": "https://arxiv.org/abs/2610.02330",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2610.02330",
        "notes": "Exact title and all six authors confirmed."
      },
      {
        "sourceIndex": 3,
        "title": "Understanding and Mitigating Under-Confidence in GNNs from the Final Layer.",
        "url": "https://arxiv.org/abs/2505.11335",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2505.11335",
        "notes": "Exact title and the same six authors; Ping Hu and Xiaoshuang Shi order differs in the preprint. Published author order retained."
      },
      {
        "sourceIndex": 4,
        "title": "Permute-then-Adapt: Weak-to-Strong Contrastive Image-Text Adaptation.",
        "url": "https://neurips.cc/virtual/2026/poster/150368",
        "kind": "official_conference",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://neurips.cc/Downloads/2026",
        "notes": "Exact current title linked from official NeurIPS Downloads 2026. Poster page restricted to the research browser; author list not available on the downloads index. No arXiv version located."
      },
      {
        "sourceIndex": 5,
        "title": "AgentBrew: Offline Tool-Use Agent Learning from Raw Real-World Trajectories.",
        "url": "https://arxiv.org/abs/2609.05837",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2609.05837",
        "notes": "Exact title and all ten authors confirmed. Unrelated AgentBrew 2607.16851 excluded."
      },
      {
        "sourceIndex": 7,
        "title": "Generation-Gated Cascaded Routing for Large Language Models.",
        "url": "https://aclanthology.org/2026.emnlp-main.2071/",
        "kind": "official_conference",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://aclanthology.org/2026.emnlp-main.2071/",
        "notes": "Exact title and all three authors confirmed on ACL Anthology; official PDF available. No arXiv version located."
      },
      {
        "sourceIndex": 8,
        "title": "PlatformBid: An Auto-Bidding Benchmark from a Unified Advertising Platform's Perspective.",
        "url": "https://arxiv.org/abs/2607.27265",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2607.27265",
        "notes": "Exact title and author list confirmed, including the repeated Peng Jiang entry."
      },
      {
        "sourceIndex": 9,
        "title": "Phase-Aware Mixture of Experts for Agentic Reinforcement Learning.",
        "url": "https://arxiv.org/abs/2602.17038",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2602.17038",
        "notes": "Exact title and all seven authors confirmed."
      },
      {
        "sourceIndex": 10,
        "title": "Beyond Trajectory-Level Attribution: Graph-Based Credit Assignment for Agentic Reinforcement Learning.",
        "url": "https://arxiv.org/abs/2605.26684",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2605.26684",
        "notes": "Exact title and all seven authors confirmed; HaiYang/Haiyang capitalization differs only."
      },
      {
        "sourceIndex": 11,
        "title": "When More Experts Hurt: Underfitting in Multi-Expert Learning to Defer.",
        "url": "https://arxiv.org/abs/2602.17144",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2602.17144",
        "notes": "Exact title and all five authors confirmed."
      },
      {
        "sourceIndex": 12,
        "title": "TokenSwap: Backdoor Attack on the Compositional Understanding of Large Vision-Language Models.",
        "url": "https://arxiv.org/abs/2509.24566",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2509.24566",
        "notes": "Exact title and all six authors confirmed. Preprint year 2025 differs from conference year 2026."
      },
      {
        "sourceIndex": 13,
        "title": "Long-Tailed Out-of-Distribution Detection with Refined Separate Class Learning.",
        "url": "https://arxiv.org/abs/2509.17034",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2509.17034",
        "notes": "Exact title; all six preprint authors match the published record. Published version adds Baoming Zhang. Author repository RSCL confirms the same title and seven-author CVPR Findings citation; same-work link inferred from exact title and overlapping authors. Published author list retained.",
        "additionalVerificationUrl": "https://github.com/shuaiNJU/RSCL"
      },
      {
        "sourceIndex": 14,
        "title": "Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Model.",
        "url": "https://arxiv.org/abs/2602.01167",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2602.01167",
        "notes": "All eight authors confirmed. Preprint title ends in plural Models and journal reference identifies CVPR Findings 2026; existing title retained."
      },
      {
        "sourceIndex": 15,
        "title": "Test-Time Attention Purification for Backdoored Large Vision Language Models.",
        "url": "https://arxiv.org/abs/2603.12989",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2603.12989",
        "notes": "Exact title and all eight authors confirmed."
      },
      {
        "sourceIndex": 20,
        "title": "An Invariant Latent Space Perspective on Language Model Inversion.",
        "url": "https://arxiv.org/abs/2511.19569",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2511.19569",
        "notes": "Exact title and all ten authors confirmed; arXiv comment identifies AAAI-26."
      },
      {
        "sourceIndex": 45,
        "title": "IRNet: Iterative Refinement Network for Noisy Partial Label Learning.",
        "url": "https://arxiv.org/abs/2211.04774",
        "kind": "arxiv",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://arxiv.org/abs/2211.04774",
        "notes": "Latest v6, revised 2025-10-08, confirms exact title and all seven journal authors, including Lei Feng."
      },
      {
        "sourceIndex": 58,
        "title": "Positive and Unlabeled Learning with Controlled Probability Boundary Fence.",
        "url": "https://proceedings.mlr.press/v235/li24p.html",
        "kind": "official_conference",
        "verifiedOn": "2026-10-29",
        "verificationUrl": "https://proceedings.mlr.press/v235/li24p.html",
        "notes": "Exact title, all six authors, ICML 2024 and pages 27641–27652 confirmed by PMLR. No arXiv version located."
      }
    ],
    "representativeArxivChecks": [
      {
        "sourceTitle": "CIPO: Counterfactual Imagination Policy Optimization for Adaptive Tool Granularity Selection",
        "id": "2610.04991",
        "url": "https://arxiv.org/abs/2610.04991",
        "title": "CIPO: Counterfactual Imagination Policy Optimization for Adaptive Tool Granularity Selection",
        "authors": [
          "Yu Li",
          "Yunlu Wan",
          "Zijian Zhu",
          "Han Luo",
          "Chao Ren",
          "Long-Fei Li",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2610.04991",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "The Opponent Learns Too: Alternating Adversarial Training for Stronger Conversational Agents",
        "status": "not_found",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Mitigating the Preference Trap of LLM User Simulators in Persuasion Dialogue RL",
        "status": "not_found",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "MemDev-Bench: Does Memory Help Code Agents? Benchmarking Memory Systems over Real Repository Histories",
        "id": "2610.27524",
        "url": "https://arxiv.org/abs/2610.27524",
        "title": "MemDev-Bench: Does Memory Help Code Agents?Benchmarking Memory Systems over Real Repository Histories",
        "authors": [
          "Guorui Chen",
          "Tao Liu",
          "Zhenzhen Huang",
          "Yidan Zhang",
          "Liyu Jiang",
          "Shuoyuan Wang",
          "Hanchen Sun",
          "Xu He",
          "Dong Li",
          "Yihan Hu",
          "Jianye Hao",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2610.27524",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Beyond the Final Embedding: Retrieving Memories from Token-Level Evidence",
        "id": "2610.13277",
        "url": "https://arxiv.org/abs/2610.13277",
        "title": "Beyond the Final Embedding: Retrieving Memories from Token-Level Evidence",
        "authors": [
          "Han Luo",
          "Zhan Zhuang",
          "Xu He",
          "Jujia Zhao",
          "Yu Li",
          "Suqin Yuan",
          "Dong Li",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2610.13277",
        "verifiedOn": "2026-10-29",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "NEAR: Neighborhood-Aware Residuals for Memory Retrieval",
        "id": "2610.13314",
        "url": "https://arxiv.org/abs/2610.13314",
        "title": "NEAR: Neighborhood-Aware Residuals for Memory Retrieval",
        "authors": [
          "Han Luo",
          "Zhan Zhuang",
          "Xu He",
          "Jujia Zhao",
          "Yu Li",
          "Suqin Yuan",
          "Dong Li",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2610.13314",
        "verifiedOn": "2026-10-29",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Conditioning the Write: Semantic Cues for Continual Long-Context Parametric Memory",
        "status": "not_found",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Abstract-State Grouping Policy Optimization for CLI Agents",
        "status": "not_found",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Credit Where It Matters: Dependency-Aware Policy Optimization for Terminal Agents",
        "id": "2610.03634",
        "url": "https://arxiv.org/abs/2610.03634",
        "title": "Credit Where It Matters: Dependency-Aware Policy Optimization for Terminal Agents",
        "authors": [
          "Yu Li",
          "Guangfeng Cai",
          "Long-Fei Li",
          "Shuo Han",
          "Shengtian Yang",
          "Han Luo",
          "Kaibing Yang",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2610.03634",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents",
        "id": "2609.36939",
        "url": "https://arxiv.org/abs/2609.36939",
        "title": "SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents",
        "authors": [
          "Shengtian Yang",
          "Ziyu Xiong",
          "Kaibing Yang",
          "Guangfeng Cai",
          "Yewen Li",
          "Peng Jiang",
          "Gai Kun",
          "Qingpeng Cai",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2609.36939",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Online Causal Kalman Filtering for Stable and Effective Policy Optimization",
        "id": "2602.10609",
        "url": "https://arxiv.org/abs/2602.10609",
        "title": "Online Causal Kalman Filtering for Stable and Effective Policy Optimization",
        "authors": [
          "Shuo He",
          "Lang Feng",
          "Xin Cheng",
          "Lei Feng",
          "Bo An"
        ],
        "verificationUrl": "https://arxiv.org/abs/2602.10609",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "SRPO: Setwise Relative Policy Optimization for Multi-Agent Systems",
        "id": "2609.08452",
        "url": "https://arxiv.org/abs/2609.08452",
        "title": "SRPO: Setwise Relative Policy Optimization for Multi-Agent Systems",
        "authors": [
          "Shengtian Yang",
          "Ziyu Xiong",
          "Yu Li",
          "Yewen Li",
          "Qingpeng Cai",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2609.08452",
        "searchedOn": "2026-10-29"
      },
      {
        "sourceTitle": "Learning from All-Failed Groups via First-Visit Coverage in Long-Horizon Agentic Tasks",
        "id": "2607.22724",
        "url": "https://arxiv.org/abs/2607.22724",
        "title": "Learning from All-Failed Groups via First-Visit Coverage in Long-Horizon Agentic Tasks",
        "authors": [
          "Kaibing Yang",
          "Guangfeng Cai",
          "Shengtian Yang",
          "Shuo He",
          "Yu Li",
          "Mengyi Liu",
          "Pengwei Chen",
          "Jun Xu",
          "Lei Feng"
        ],
        "verificationUrl": "https://arxiv.org/abs/2607.22724",
        "searchedOn": "2026-10-31"
      },
      {
        "sourceTitle": "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills",
        "id": "2608.03700",
        "url": "https://arxiv.org/abs/2608.03700",
        "title": "When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills",
        "authors": [
          "Yongli Xiang",
          "Zhifang Zhang",
          "Bojun Yang",
          "Ziming Hong",
          "Lei Feng",
          "Miao Xu",
          "Tongliang Liu"
        ],
        "verificationUrl": "https://arxiv.org/abs/2608.03700",
        "searchedOn": "2026-10-31"
      },
      {
        "sourceTitle": "When Collaboration Becomes a Trigger: Collective Evidence-Threshold Backdoors in Multi-Agent Systems",
        "id": "2608.01085",
        "url": "https://arxiv.org/abs/2608.01085",
        "title": "When Collaboration Becomes a Trigger: Collective Evidence-Threshold Backdoors in Multi-Agent Systems",
        "authors": [
          "Jia-Hao Xiao",
          "Lei Feng",
          "Min-Ling Zhang"
        ],
        "verificationUrl": "https://arxiv.org/abs/2608.01085",
        "searchedOn": "2026-10-31"
      }
    ],
    "experienceSource": {
      "file": "codex-clipboard-681cb169-adcb-4df7-9bd8-fdf25718271e.png",
      "suppliedOn": "2026-10-30",
      "description": "User-provided employment history screenshot."
    }
  },
  "team": [
    {
      "id": "postdoctoral-researchers",
      "title": "Postdoctoral researchers",
      "titleZh": "博士后",
      "members": [
        {
          "name": "Ying Chen",
          "period": "2026-",
          "nameZh": "陈颖"
        },
        {
          "name": "Senlin Shu",
          "period": "2026-",
          "nameZh": "舒森林"
        }
      ]
    },
    {
      "id": "phd-students",
      "title": "PhD students",
      "titleZh": "博士生",
      "members": [
        {
          "name": "Wei Niu",
          "period": "2023-",
          "role": "co-supervised with Prof. Yichuan Jiang"
        },
        {
          "name": "Tianyu Zuo",
          "period": "2024-",
          "role": "co-supervised with Prof. Yichuan Jiang"
        },
        {
          "name": "Yu Li",
          "period": "2025-",
          "nameZh": "李煜"
        },
        {
          "name": "Han Luo",
          "period": "2025-",
          "nameZh": "罗涵"
        },
        {
          "name": "Jiahao Xiao",
          "period": "2025-",
          "role": "co-supervised with Prof. Min-Ling Zhang",
          "nameZh": "肖家豪"
        },
        {
          "name": "Zhifang Zhang",
          "period": "2025-",
          "role": "co-supervised with Prof. Miao Xu"
        },
        {
          "name": "Bingli Wang",
          "period": "2026-",
          "nameZh": "王炳利"
        },
        {
          "name": "Shengjie Zhou",
          "period": "2026-",
          "nameZh": "周圣杰"
        },
        {
          "name": "Ao Ke",
          "period": "2026-",
          "nameZh": "柯傲"
        },
        {
          "name": "Ping Chen",
          "period": "2026-"
        }
      ]
    },
    {
      "id": "masters-students",
      "title": "Master’s students",
      "titleZh": "硕士生",
      "members": [
        {
          "name": "Guorui Chen",
          "period": "2024-",
          "nameZh": "陈国睿"
        },
        {
          "name": "Jianan Chen",
          "period": "2024-",
          "nameZh": "陈嘉楠"
        },
        {
          "name": "Xiaoya Jiang",
          "period": "2024-",
          "role": "co-supervised with Prof. Min-Ling Zhang",
          "nameZh": "姜小丫"
        },
        {
          "name": "Haoran Xu",
          "period": "2024-",
          "role": "co-supervised with Prof. Shaofu Yang"
        },
        {
          "name": "Zhenzhen Huang",
          "period": "2025-",
          "nameZh": "黄真桢"
        },
        {
          "name": "Liyu Jiang",
          "period": "2025-",
          "nameZh": "姜力宇"
        },
        {
          "name": "Guangfeng Cai",
          "period": "2025-",
          "nameZh": "蔡光丰"
        },
        {
          "name": "Yunlu Wan",
          "period": "2025-",
          "nameZh": "万云璐"
        },
        {
          "name": "Yanqiu Xu",
          "period": "2026-",
          "nameZh": "徐演秋"
        },
        {
          "name": "Shengtian Yang",
          "period": "2026-",
          "nameZh": "杨盛天"
        },
        {
          "name": "Bojun Yang",
          "period": "2026-",
          "nameZh": "杨伯骏"
        },
        {
          "name": "Kaibing Yang",
          "period": "2026-",
          "nameZh": "杨凯冰"
        },
        {
          "name": "Tao Liu",
          "period": "2026-",
          "nameZh": "刘韬"
        },
        {
          "name": "Liwen Cao",
          "period": "2026-",
          "nameZh": "曹力文"
        },
        {
          "name": "Yuheng Chen",
          "period": "2027-",
          "nameZh": "陈昱衡"
        },
        {
          "name": "Jinkun Chen",
          "period": "2027-",
          "nameZh": "陈锦琨"
        },
        {
          "name": "Yidan Zhang",
          "period": "2027-",
          "nameZh": "张译丹"
        },
        {
          "name": "Zijian Zhu",
          "period": "2027-",
          "nameZh": "朱子健"
        },
        {
          "name": "Zhurun Zhang",
          "period": "2027-",
          "nameZh": "张朱润"
        },
        {
          "name": "You Li",
          "period": "2027-",
          "nameZh": "李优"
        },
        {
          "name": "Yuxuan Yang",
          "period": "2027-",
          "nameZh": "杨宇轩"
        },
        {
          "name": "Junlin Li",
          "period": "2027-",
          "nameZh": "李俊霖"
        }
      ]
    },
    {
      "id": "past-members",
      "title": "Past Members",
      "titleZh": "往届成员",
      "members": [
        {
          "name": "Yonghua Zhu",
          "nameZh": "朱永华",
          "role": "Postdoctoral Researcher @ SUTD 2024-2025",
          "currentPosition": "Professor @ Shanxi University"
        },
        {
          "name": "Zongqian Wu",
          "role": "CSC Visiting PhD @ SUTD 2024-2025",
          "currentPosition": "Research Fellow @ NUS"
        },
        {
          "name": "Jincheng Huang",
          "role": "CSC Visiting PhD @ SUTD 2024-2025",
          "currentPosition": "Research Scientist @ SMU"
        },
        {
          "name": "Senlin Shu",
          "role": "PhD @ CQU 2022-2026",
          "currentPosition": "Postdoctoral Researcher @ SEU"
        },
        {
          "name": "Xin Cheng",
          "role": "Master @ CQU 2022-2025",
          "currentPosition": "RA @ NTU"
        },
        {
          "name": "Zixi Wei",
          "role": "Master @ CQU 2022-2025",
          "currentPosition": "PhD @ THU"
        },
        {
          "name": "Shengjie Zhou",
          "role": "Master @ CQU 2023-2026",
          "currentPosition": "PhD @ SEU"
        },
        {
          "name": "Suqin Yuan",
          "role": "Undergraduate @ CQU 2018-2022",
          "currentPosition": "PhD @ The University of Sydney"
        },
        {
          "name": "Zhifang Zhang",
          "role": "Undergraduate @ CQU 2019-2024",
          "currentPosition": "PhD @ The University of Queensland"
        },
        {
          "name": "Zongyu Wu",
          "role": "Undergraduate @ CQU 2019-2023",
          "currentPosition": "PhD @ The Pennsylvania State University"
        },
        {
          "name": "Shiyu Tian",
          "role": "Undergraduate @ CQU 2021-2025",
          "currentPosition": "PhD @ NJU LAMDA Group"
        },
        {
          "name": "Yuwei Niu",
          "role": "Undergraduate @ CQU 2022-2026",
          "currentPosition": "Master @ PKU"
        },
        {
          "name": "Jiahan Zhang",
          "role": "RA @ NTU 2023-2024",
          "currentPosition": "PhD @ Johns Hopkins University"
        }
      ],
      "source": "User-provided update, 2026-10-29"
    }
  ],
  "researchIntro": "My research focuses on AI agents, agentic reinforcement learning, and AI security. I study how agents learn from sparse interaction feedback, make reliable decisions over long interactions, and accumulate useful knowledge and experience across tasks.",
  "experience": [
    {
      "title": "Full Professor (PhD Supervisor)",
      "period": "Mar 2025 - Present",
      "text": "Full Professor (PhD Supervisor). School of Computer Science and Engineering, Southeast University, China.",
      "html": "<p><b>Full Professor (PhD Supervisor)</b></p>School of Computer Science and Engineering, Southeast University, China."
    },
    {
      "title": "Assistant Professor (PhD Supervisor)",
      "period": "Jun 2024 - Mar 2025",
      "text": "Assistant Professor (PhD Supervisor). Information Systems Technology and Design Pillar, Singapore University of Technology and Design, Singapore.",
      "html": "<p><b>Assistant Professor (PhD Supervisor)</b></p>Information Systems Technology and Design Pillar, Singapore University of Technology and Design, Singapore."
    },
    {
      "title": "Visiting Professor (PhD Supervisor)",
      "period": "Apr 2023 - Jun 2024",
      "text": "Visiting Professor (PhD Supervisor). School of Computer Science and Engineering, Nanyang Technological University, Singapore.",
      "html": "<p><b>Visiting Professor (PhD Supervisor)</b></p>School of Computer Science and Engineering, Nanyang Technological University, Singapore."
    },
    {
      "title": "Full Professor (PhD Supervisor)",
      "period": "Mar 2021 - Apr 2023",
      "text": "Full Professor (PhD Supervisor). College of Computer Science, Chongqing University, China.",
      "html": "<p><b>Full Professor (PhD Supervisor)</b></p>College of Computer Science, Chongqing University, China."
    }
  ]
};
