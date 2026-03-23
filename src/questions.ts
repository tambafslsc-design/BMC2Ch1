export interface Question {
  questionNumber: number;
  reference: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  {
    questionNumber: 1,
    reference: "BAFS600C2Ch1-1",
    text: "Which of the following is the correct procedure of management?\n\n(1) organising\n(2) planning\n(3) controlling\n(4) leading",
    options: {
      A: "(1) (2) (3) (4)",
      B: "(2) (1) (3) (4)",
      C: "(2) (1) (4) (3)",
      D: "(2) (3) (1) (4)"
    },
    answer: "C",
    explanation: "The correct procedure of management is as follows: (2) planning (1) organising (4) leading (3) controlling."
  },
  {
    questionNumber: 2,
    reference: "BAFS600C2Ch1-2",
    text: "Which of the following is/are the difference(s) between efficiency and effectiveness?\n\n(1) Efficiency means doing the right thing while effectiveness means doing the thing right.\n(2) When the organisational goal is achieved, an organisation is said to be effective though it may not be efficient.\n(3) Efficiency emphasises cost control while effectiveness stresses the final production.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "D",
    explanation: "(2) is correct. Effectiveness is the ability to achieve goals while efficiency means getting the most output from the least amount of input. (3) is correct. (1) is incorrect. Efficiency means doing the things right while effectiveness means doing the right things."
  },
  {
    questionNumber: 3,
    reference: "BAFS600C2Ch1-3",
    text: "Which of the following is/are the correct description(s) of management functions?\n\n(1) planning | deciding objectives of the firm\n(2) organising | guiding work efforts to implement the action plans\n(3) leading | completing different tasks in order to achieve the objectives of the firm",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "Only (1) is correct. The correct answer is as follows: (1) planning | deciding objectives of the firm; (2) organising | completing different tasks in order to achieve the objectives of the firm; (3) leading | guiding work efforts to implementing the action plans."
  },
  {
    questionNumber: 4,
    reference: "BAFS600C2Ch1-4",
    text: "Which of the following is/are the reason(s) for the existence of the management?\n\n(1) set a direction and guideline for a company to meet goals\n(2) enhance shareholders’ involvement in company’s affairs\n(3) help profit-making organisations but not non-profit-making organisations to achieve objectives",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Through management, resources are efficiently coordinated to meet targets set. (2) is incorrect. Management is done by managers but not shareholders. (3) is incorrect. Management concepts can help both profit-making and non-profit-making organisations."
  },
  {
    questionNumber: 5,
    reference: "BAFS600C2Ch1-5",
    text: "Which of the following statements is/are correct about the levels of management?\n\n(1) Middle management carries out business plans formulated by the top management.\n(2) Middle management needs to supervise the frontline employees regularly.\n(3) First-line management needs to handle daily problems in the workplace.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) is correct. Middle management reports to the top managers and ensures the business plans are implemented. (2) is incorrect. It is the first-line management who monitors the frontline employees. (3) is correct. First-line management has to deal with problems in daily operations."
  },
  {
    questionNumber: 6,
    reference: "BAFS600C2Ch1-6",
    text: "Which of the following statements about planning are correct?\n\n(1) It clarifies the roles of each person.\n(2) It designs alternative arrangements to handle potential problems.\n(3) It designs and creates an organisational structure.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. The plan made in planning clarifies the roles and responsibilities of each person. (2) is correct. Potential problems are anticipated and alternative arrangements are prepared. (3) is incorrect. Organisational structure is created in the process of organising instead."
  },
  {
    questionNumber: 7,
    reference: "BAFS600C2Ch1-7",
    text: "______________ determines the best way to achieve organisational goals and objectives.",
    options: {
      A: "Planning",
      B: "Organising",
      C: "Leading",
      D: "Controlling"
    },
    answer: "A",
    explanation: "In the process of planning, top management establishes goals and objectives. It makes plans which spell out the best way to achieve the organisational goals."
  },
  {
    questionNumber: 8,
    reference: "BAFS600C2Ch1-8",
    text: "Which of the following are the reasons for carrying out planning?\n\n(1) It helps direct the company and employees to accomplish organisational goals.\n(2) It helps predict potential problems.\n(3) It helps managers identify the organisational strengths and weaknesses.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) are all correct. Planning sets goals, identifies potential issues, and helps a company improve flexibility by anticipating SWOT."
  },
  {
    questionNumber: 9,
    reference: "BAFS600C2Ch1-9",
    text: "Which of the following are the advantages of adopting a flat organisational structure rather than a tall one?\n\n(1) improvement in flexibility of management\n(2) enhanced communication\n(3) better decisions made",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Fewer levels enable improved management flexibility and communication. (3) is incorrect. Adopting a flat structure does not necessarily result in better decisions; the number of levels has no direct relation with decision quality."
  },
  {
    questionNumber: 10,
    reference: "BAFS600C2Ch1-10",
    text: "______________ identifies which employees and what resources are to support the plan.",
    options: {
      A: "Management by Objectives",
      B: "Organising",
      C: "Leading",
      D: "Delegation"
    },
    answer: "B",
    explanation: "Organising is the process of creating an organisational structure which specifies the responsibilities for each job position and identifies how tasks are to be arranged."
  },
  {
    questionNumber: 11,
    reference: "BAFS600C2Ch1-11",
    text: "Which of the following is/are correct about the functions of organising?\n\n(1) Workers coordinate to achieve organisational goals through organising.\n(2) All organisations should follow the same organisational structure to ensure the effectiveness and efficiency of the company.\n(3) Organising helps identify what tasks are needed to be done by each job position.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) and (3) are correct. (2) is incorrect because different organisational structures suit different companies' needs and leadership styles."
  },
  {
    questionNumber: 12,
    reference: "BAFS600C2Ch1-12",
    text: "Which of the following statements about the level of organisational structure is correct?",
    options: {
      A: "A flat structure has more layers than a tall structure.",
      B: "A tall structure improves the communication within the company.",
      C: "A flat structure improves the flexibility in the company.",
      D: "A tall structure has a wider span of control per manager."
    },
    answer: "C",
    explanation: "Information flow is faster in a flat structure, allowing for quicker decision-making and higher flexibility. A and B are incorrect as tall structures have more layers and slower communication. D is incorrect as spans of control are wider under a flat structure."
  },
  {
    questionNumber: 13,
    reference: "BAFS600C2Ch1-13",
    text: "Which of the following descriptions about staff managers is/are correct?\n\n(1) Staff managers give order to and monitor line managers.\n(2) Staff managers give advice to line managers to make decisions.\n(3) Staff managers have more authority than line managers.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) and (3) are incorrect. Staff managers do not have more authority than line managers and do not give orders to them. (2) is correct; their role is to assist and give advice to line managers."
  },
  {
    questionNumber: 14,
    reference: "BAFS600C2Ch1-14",
    text: "A multinational company has operations in many countries. Its departments are usually formed by ______________.",
    options: {
      A: "process",
      B: "product",
      C: "location",
      D: "function"
    },
    answer: "C",
    explanation: "A multinational company usually sets up departments in different regions such as Asia, Europe, and Africa for its business operations."
  },
  {
    questionNumber: 15,
    reference: "BAFS600C2Ch1-15",
    text: "In a company, the marketing director organises its marketing activities by setting up a sales department, marketing research department and product development department. The marketing department is formed by ______________.",
    options: {
      A: "process",
      B: "product",
      C: "location",
      D: "function"
    },
    answer: "D",
    explanation: "The sales, marketing research, and product development departments are responsible for performing different functions in organising marketing activities."
  },
  {
    questionNumber: 16,
    reference: "BAFS600C2Ch1-16",
    text: "Which of the following are the disadvantages of a tall structure over a flat structure?\n\n(1) lower flexibility in operation\n(2) higher administration costs\n(3) a slower decision-making process",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) are all correct. Due to complexity and many layers, decision-making is slower, administration costs are higher, and flexibility is lower."
  },
  {
    questionNumber: 17,
    reference: "BAFS600C2Ch1-17",
    text: "In which of the following situations is autocratic leadership style appropriate to be adopted?\n\n(1) Subordinates are passionate about taking up responsibilities.\n(2) Superiors are not willing to delegate authority to lower levels.\n(3) Decisions need to be made quickly.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is incorrect as participative style is better for passionate subordinates. (2) and (3) are correct situations for autocratic leadership."
  },
  {
    questionNumber: 18,
    reference: "BAFS600C2Ch1-18",
    text: "In which of the following situations is participative leadership appropriate to be adopted?",
    options: {
      A: "Workers are willing to take up extra job responsibilities.",
      B: "The tasks require freedom of expression.",
      C: "Workers are inexperienced and passive.",
      D: "Information is only available to the managers."
    },
    answer: "A",
    explanation: "Participative leadership involves both managers and workers in decision-making, which enhances commitment when workers are willing to take up more responsibilities."
  },
  {
    questionNumber: 19,
    reference: "BAFS600C2Ch1-19",
    text: "Arrange the following steps for the controlling process in correct order.\n\n(1) compare the actual performance with the performance standard\n(2) set a performance standard\n(3) measure the actual performance\n(4) carry out corrective measures",
    options: {
      A: "(2) (3) (4) (1)",
      B: "(2) (3) (1) (4)",
      C: "(3) (2) (1) (4)",
      D: "(3) (2) (4) (1)"
    },
    answer: "B",
    explanation: "The correct order is: (2) set a performance standard, (3) measure actual performance, (1) compare performance with standard, (4) carry out corrective measures."
  },
  {
    questionNumber: 20,
    reference: "BAFS600C2Ch1-20",
    text: "Production activities are said to be efficient if the organisation can ______________.",
    options: {
      A: "carry out the activities very quickly",
      B: "accomplish its organisational goals",
      C: "get the most output from the least input",
      D: "maximise its profit"
    },
    answer: "C",
    explanation: "Efficient production activities are cost-effective, where output is maximised and no resources are wasted."
  },
  {
    questionNumber: 21,
    reference: "BAFS600C2Ch1-21",
    text: "Which of the following are the adverse effects of poor management in the company?\n\n(1) low employees’ morale\n(2) confusing policies\n(3) no unity of command",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct effects of poor management. (3) is a characteristic of poor management but not an effect."
  },
  {
    questionNumber: 22,
    reference: "BAFS600C2Ch1-22",
    text: "Sandy is the CEO of Star Limited, which provides wedding planning services. She wrote an email to ask Frankie, the department head of the Kowloon Division, to run a new programme, called 'First time and Forever'.\n\nSandy is a ______________, while Frankie is a ______________.",
    options: {
      A: "middle manager ...... first-line manager",
      B: "first-line manager ...... top manager",
      C: "top manager ...... first-line manager",
      D: "top manager ...... middle manager"
    },
    answer: "D",
    explanation: "Sandy is the CEO (top manager). Frankie is a department head (middle manager) responsible for executing plans decided by top managers."
  },
  {
    questionNumber: 23,
    reference: "BAFS600C2Ch1-23",
    text: "Sandy is the CEO of Star Limited, which provides wedding planning services. She wrote an email to ask Frankie, the department head of the Kowloon Division, to run a new programme, called 'First time and Forever'.\n\nWhich of the following is the duty performed by Frankie in the above case?",
    options: {
      A: "cope with customers’ complaints",
      B: "carry out plans and decisions made",
      C: "make decisions on running the newly launched programme",
      D: "deal with problems occurred in the stores"
    },
    answer: "B",
    explanation: "As a middle manager, Frankie needs to carry out plans made by the top manager (Sandy). A and D are duties of first-line managers."
  },
  {
    questionNumber: 24,
    reference: "BAFS600C2Ch1-24",
    text: "Giving awards to outstanding staff is an example of ______________.",
    options: {
      A: "planning",
      B: "organising",
      C: "leading",
      D: "controlling"
    },
    answer: "C",
    explanation: "Leading includes guiding and motivating employees. Rewarding outstanding staff is a motivation given by managers."
  },
  {
    questionNumber: 25,
    reference: "BAFS600C2Ch1-25",
    text: "Joseph, the CEO of MJ Limited, is planning to establish a customer service department. He would like to recruit employees and set up the department in 11 months. Mary is the centre director of the new customer service centre and she has to organise all the important affairs about this plan, like deciding the geographical location of the centre and the number of employees.\n\nWhich of the following tasks is NOT done by Joseph?",
    options: {
      A: "deciding the company’s vision and mission",
      B: "making decisions about the relocation of production bases",
      C: "meeting with Mary and giving orders to her",
      D: "resolving disputes among workers in shops"
    },
    answer: "D",
    explanation: "Resolving disputes among workers in shops is the responsibility of first-line managers. Joseph, as a top manager, makes company-wide decisions."
  },
  {
    questionNumber: 26,
    reference: "BAFS600C2Ch1-26",
    text: "Which of the following are the characteristics of effective goals?\n\n(1) measurable\n(2) remarkable\n(3) time-based",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "Effective goals follow the SMART criteria: Specific, Measurable, Attainable, Realistic, and Time-based. (1) and (3) are correct."
  },
  {
    questionNumber: 27,
    reference: "BAFS600C2Ch1-27",
    text: "In which of the following situations should laissez-faire leadership be adopted?\n\n(1) Workers are competent and experienced.\n(2) The task requires a high level of creativity.\n(3) The workers are not willing to take up job responsibilities.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Laissez-faire leadership is suitable for competent workers or creative tasks. (3) is incorrect as it would lead to failure."
  },
  {
    questionNumber: 28,
    reference: "BAFS600C2Ch1-28",
    text: "Yuri is the chief executive officer of a large convenience store chain. She sets a new target for the chain: \"We should improve our customer services within one year.\" Which of the following characteristics of an effective goal are NOT met in this target?\n\n(1) time-based\n(2) specific\n(3) measurable",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "The goal is time-based ('within one year'), but it is not specific or measurable as it doesn't use numbers or clear targets."
  },
  {
    questionNumber: 29,
    reference: "BAFS600C2Ch1-29",
    text: "Which of the following is NOT a disadvantage of autocratic leadership?",
    options: {
      A: "Workers have a low job satisfaction.",
      B: "Workers are less motivated.",
      C: "The decision-making process is slower.",
      D: "Workers become passive."
    },
    answer: "C",
    explanation: "Autocratic leadership speeds up decision-making because leaders make decisions on their own without discussion."
  },
  {
    questionNumber: 30,
    reference: "BAFS600C2Ch1-30",
    text: "Which of the following are the responsibilities of a first-line manager?\n\n(1) resolve conflicts among workers\n(2) create mission and vision\n(3) handle customer complaints",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. First-line managers deal with daily operations. (2) is a top management responsibility."
  },
  {
    questionNumber: 31,
    reference: "BAFS600C2Ch1-31",
    text: "James, the general manager of BOP Limited, is making an important decision. Since the company is facing a severe financial crisis, he is considering whether to fire his employees, which is likely to be opposed by them. Which of the following leadership styles should be adopted by James to make his decision?",
    options: {
      A: "autocratic leadership",
      B: "laissez-faire leadership",
      C: "democratic leadership",
      D: "communist leadership"
    },
    answer: "A",
    explanation: "Autocratic leadership is appropriate when a prompt decision is needed and likely to be opposed by workers."
  },
  {
    questionNumber: 32,
    reference: "BAFS600C2Ch1-32",
    text: "James, the general manager of BOP Limited, is making an important decision. Since the company is facing a severe financial crisis, he is considering whether to fire his employees, which is likely to be opposed by them. Which of the following statements are INCORRECT?\n\n(1) James is the first-line manager of the firm.\n(2) James should lay off all workers who are dissatisfied with the decision.\n(3) When workers are inexperienced, James should not use participative and laissez-faire leadership styles.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is incorrect as James is a top manager. (2) is incorrect as laying off dissatisfied workers is not a standard management practice. (3) is correct."
  },
  {
    questionNumber: 33,
    reference: "BAFS600C2Ch1-33",
    text: "Arrange the following steps of planning in the correct order.\n\n(1) monitor the progress towards goal completion\n(2) establish goals and objectives\n(3) develop and implement action plans\n(4) conduct analysis of the business resources",
    options: {
      A: "(2) (4) (1) (3)",
      B: "(2) (4) (3) (1)",
      C: "(4) (2) (1) (3)",
      D: "(4) (2) (3) (1)"
    },
    answer: "B",
    explanation: "The correct order is: (2) establish goals, (4) conduct analysis, (3) develop action plans, (1) monitor progress."
  },
  {
    questionNumber: 34,
    reference: "BAFS600C2Ch1-34",
    text: "Joe is a salesperson newly employed at the beginning of the year. Throughout the year, he is responsible for promoting and selling smartphones in a shop of the store chain. In the year end, Banjo, the shop supervisor, decides to carry out controlling to evaluate the performance of Joe and other salesmen. Which type of management does Banjo engage in?",
    options: {
      A: "top management",
      B: "middle management",
      C: "first-line management",
      D: "special management"
    },
    answer: "C",
    explanation: "As a shop supervisor, Banjo monitors daily operations and tackles operational problems, which is first-line management."
  },
  {
    questionNumber: 35,
    reference: "BAFS600C2Ch1-35",
    text: "Joe is a salesperson newly employed at the beginning of the year. Throughout the year, he is responsible for promoting and selling smartphones in a shop of the store chain. In the year end, Banjo, the shop supervisor, decides to carry out controlling to evaluate the performance of Joe and other salesmen. Which of the following are tasks done by Banjo?\n\n(1) coach salesmen\n(2) settle conflicts between salesmen and customers\n(3) work out the development plans for the store chain",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct for a first-line manager. (3) is a top management task."
  },
  {
    questionNumber: 36,
    reference: "BAFS600C2Ch1-36",
    text: "Joe is a salesperson newly employed at the beginning of the year. Throughout the year, he is responsible for promoting and selling smartphones in a shop of the store chain. In the year end, Banjo, the shop supervisor, decides to carry out controlling to evaluate the performance of Joe and other salesmen. Which of the following are within the process of controlling carried out by Banjo?\n\n(1) set sales targets\n(2) group salesmen into different teams\n(3) record sales of all salespeople",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct as they involve setting standards and measuring performance. (2) is part of organising."
  },
  {
    questionNumber: 37,
    reference: "BAFS600C2Ch1-37",
    text: "Joe is a salesperson newly employed at the beginning of the year. Throughout the year, he is responsible for promoting and selling smartphones in a shop of the store chain. In the year end, Banjo, the shop supervisor, decides to carry out controlling to evaluate the performance of Joe and other salesmen. Which of the following is NOT a performance indicator for Joe as a salesman?",
    options: {
      A: "number of complaints received from customers",
      B: "sales volume",
      C: "frequency of being late for work",
      D: "quality of products sold by him"
    },
    answer: "D",
    explanation: "Joe is responsible for selling products, not producing them. Product quality is not something he can control."
  },
  {
    questionNumber: 38,
    reference: "BAFS600C2Ch1-38",
    text: "Which of the following descriptions of the differences between a flat and a tall organisational structure is correct?",
    options: {
      A: "A tall organisational structure has fewer layers.",
      B: "The span of control in a tall organisational structure is narrower.",
      C: "Decision-making in a flat organisational structure is slower.",
      D: "Administration costs in a flat organisational structure are usually higher."
    },
    answer: "B",
    explanation: "Span of control refers to the number of subordinates a supervisor has. In a tall structure, it is narrower."
  },
  {
    questionNumber: 39,
    reference: "BAFS600C2Ch1-39",
    text: "Which of the following are the advantages of adopting Management by Objectives (MBO)?\n\n(1) It improves the accountability of the employees.\n(2) It promotes coordination in the organisation.\n(3) It allows all employees to have a clear understanding of the goals of the firm.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct advantages of MBO, as it involves regular reviews and translates overall goals into specific objectives for each level."
  },
  {
    questionNumber: 40,
    reference: "BAFS600C2Ch1-40",
    text: "Which of the following is/are the advantage(s) of division of work?\n\n(1) Practice makes perfect.\n(2) It will increase job satisfaction as repetitive work can motivate workers to do better.\n(3) Workers can easily find another job if the industry in which they currently work declines.",
    options: {
      A: "(1) only",
      B: "(1) and (2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. (2) is incorrect as repetitive work causes boredom. (3) is incorrect as specialised skills make it harder to find jobs in other industries."
  },
  {
    questionNumber: 41,
    reference: "BAFS600C2Ch1-41",
    text: "Which of the following are the disadvantages of division of work?\n\n(1) difficulty of changing tasks among workers\n(2) great interdependence\n(3) boredom",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct. Workers specialise in parts of tasks, making them interdependent and potentially bored."
  },
  {
    questionNumber: 42,
    reference: "BAFS600C2Ch1-42",
    text: "Which of the following statements is/are the correct description(s) of unity of command?\n\n(1) Each employee should receive orders from one superior only.\n(2) Each employee should receive only one order from each superior.\n(3) Each employee should have the same goal as the company.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "Unity of command means each person receives orders from and reports to one superior only."
  },
  {
    questionNumber: 43,
    reference: "BAFS600C2Ch1-43",
    text: "Which of the following is/are the advantage(s) of adopting unity of direction?\n\n(1) It prevents conflicting instructions from being given by two or more superiors.\n(2) It prevents conflicting goals that may act against each other in an organisation.\n(3) It ensures that the subordinates have sufficient power to complete their assigned duties.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is a benefit of unity of command. (2) is correct for unity of direction. (3) is a benefit of delegation."
  },
  {
    questionNumber: 44,
    reference: "BAFS600C2Ch1-44",
    text: "Which of the following are the correct descriptions of unity of direction?\n\n(1) Each plan is led by one person only.\n(2) It avoids conflicting instructions from being given by two or more superiors at the same time.\n(3) It guides the effort paid by each worker towards achieving a particular goal.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. Unity of direction implies each plan is led by one person to achieve a particular goal."
  },
  {
    questionNumber: 45,
    reference: "BAFS600C2Ch1-45",
    text: "Which of the following are benefits of effective management?\n\n(1) Staff morale can be enhanced.\n(2) Operational efficiency can be increased.\n(3) Profits are guaranteed.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Profits are never guaranteed as they can be affected by external factors."
  },
  {
    questionNumber: 46,
    reference: "BAFS600C2Ch1-46",
    text: "Which of the following is the meaning of authority?",
    options: {
      A: "It refers to the formal right to receive orders.",
      B: "It refers to the formal right to give orders.",
      C: "It refers to the informal power given to employees to give responsibilities.",
      D: "It refers to the informal power given to employees to receive responsibilities."
    },
    answer: "B",
    explanation: "Authority is the formal right to order someone to perform tasks."
  },
  {
    questionNumber: 47,
    reference: "BAFS600C2Ch1-47",
    text: "Which of the following is the meaning of responsibility?",
    options: {
      A: "It refers to the obligation for employees to perform the job.",
      B: "It refers to the right of employees to perform the job.",
      C: "It refers to the power of employees to finish the job.",
      D: "It refers to the employees’ abilities to finish the job."
    },
    answer: "A",
    explanation: "Responsibility is the obligation to complete an assigned task."
  },
  {
    questionNumber: 48,
    reference: "BAFS600C2Ch1-48",
    text: "Which of the following descriptions about division of work is correct?",
    options: {
      A: "Workers specialise in doing one task in each job only.",
      B: "Workers are still required to finish the entire job.",
      C: "Workers are strictly supervised under division of labour.",
      D: "Workers are only required to do parts of the job."
    },
    answer: "D",
    explanation: "Division of labour refers to specialisation where workers concentrate on doing parts of the production process."
  },
  {
    questionNumber: 49,
    reference: "BAFS600C2Ch1-49",
    text: "Which of the following descriptions about delegation are correct?\n\n(1) The manager transfers formal authority to another person to complete the task.\n(2) The manager transfers the responsibility to another person to complete the task.\n(3) The manager is held accountable for the final result.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct. Both authority and responsibility are transferred, but the manager remains accountable."
  },
  {
    questionNumber: 50,
    reference: "BAFS600C2Ch1-50",
    text: "Which of the following are factors affecting the extent of delegation in a company?\n\n(1) ability of employees\n(2) leadership style of managers\n(3) importance of the tasks",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct factors that influence how much a manager delegates."
  },
  {
    questionNumber: 51,
    reference: "BAFS600C2Ch1-51",
    text: "Which of the following are the reasons for delegation of tasks?\n\n(1) as training to subordinates\n(2) limited knowledge of managers\n(3) heavy workload of managers",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct reasons why managers delegate tasks."
  },
  {
    questionNumber: 52,
    reference: "BAFS600C2Ch1-54",
    text: "Which of the following are advantages of applying division of work in a business?\n\n(1) better supervision of workers\n(2) new approach of doing tasks\n(3) more skilful labour",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct advantages of division of work."
  },
  {
    questionNumber: 53,
    reference: "BAFS600C2Ch1-55",
    text: "Hinson is the manager of a boutique. Bouki is an assistant in his shop. Recently, Hinson has delegated to Bouki the authority and responsibility to serve an important client. Which of the following statement is INCORRECT?",
    options: {
      A: "Hinson can take back the authority from Bouki.",
      B: "Hinson is accountable for the result if Bouki cannot manage to finish the task.",
      C: "Bouki should not independently finish his task and he should ask Hinson for help if needed.",
      D: "Bouki cannot reject Hinson’s delegation."
    },
    answer: "D",
    explanation: "Bouki can reject delegation if he believes he lacks the ability to accomplish the task assigned."
  },
  {
    questionNumber: 54,
    reference: "BAFS600C2Ch1-57",
    text: "JB Ltd is a shop selling sports equipment. Lilian and Fiona, managers of the same rank, supervise all the shop assistants. One day, Fiona hired a new shop assistant. She asked him to handle the inventory for the whole day. In the afternoon, Lilian told this assistant to go out and take the purchased products for the company. Which principle of effective management has been violated?",
    options: {
      A: "authority and delegation",
      B: "unity of direction",
      C: "unity of command",
      D: "Management by Objectives"
    },
    answer: "C",
    explanation: "Unity of command is violated when a subordinate receives contradictory orders from two supervisors."
  },
  {
    questionNumber: 55,
    reference: "BAFS600C2Ch1-58",
    text: "JB Ltd is a shop selling sports equipment. Lilian and Fiona, managers of the same rank, supervise all the shop assistants. One day, Fiona hired a new shop assistant. She asked him to handle the inventory for the whole day. In the afternoon, Lilian told this assistant to go out and take the purchased products for the company. Which of the following are possible problems arisen from the violation of the principle of effective management in Q.57?\n\n(1) Conflicting commands may be given.\n(2) Staff efforts are not directed towards the same plan.\n(3) Employees are confused.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. (2) is related to unity of direction."
  },
  {
    questionNumber: 56,
    reference: "BAFS600C2Ch1-59",
    text: "Which of the following are ways for managers to exercise their authority?\n\n(1) give orders and make decisions\n(2) supervise subordinates\n(3) reward subordinates with good performance",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All three are correct ways for managers to exercise their authority."
  },
  {
    questionNumber: 57,
    reference: "BAFS600C2Ch1-60",
    text: "Which of the following is/are correct about the significance of the planning process?\n\n(1) ensure all risks are eliminated in the business progress\n(2) select employees to attain goals\n(3) make sure employees clearly understand their roles and responsibilities",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect as risks cannot be fully eliminated. (2) is part of organising. (3) is correct."
  },
  {
    questionNumber: 58,
    reference: "BAFS600C2Ch1-61",
    text: "In a firm adopting departmentalisation by function, ______________.",
    options: {
      A: "activities with similar functions are put in the same department",
      B: "products with similar functions are grouped in one department",
      C: "all staff members of the same department have the same function",
      D: "flat organisation structure is used"
    },
    answer: "A",
    explanation: "Departmentalisation by function means grouping activities of similar functions into one department."
  },
  {
    questionNumber: 59,
    reference: "BAFS600C2Ch1-62",
    text: "John and Terry are two managers in Wong’s International. John, the manager of sales department, sets sales targets and handles related affairs. Terry is the IT manager who maintains the smooth running of IT systems. John is a ______________ manager while Terry is a ______________ manager.",
    options: {
      A: "line ...... level",
      B: "authority ...... line",
      C: "staff ...... authority",
      D: "line ...... staff"
    },
    answer: "D",
    explanation: "John is a line manager (daily production/services). Terry is a staff manager (supports other departments with expertise)."
  },
  {
    questionNumber: 60,
    reference: "BAFS600C2Ch1-63",
    text: "International Beverage produces international drinks and packs them in cartons. It has products like Chinese tea, French special drinks and Australian milk. Different departments are established accordingly. What kind(s) of departmentalisation is/are adopted by International Beverage?\n\n(1) departmentalisation by function\n(2) departmentalisation by product\n(3) departmentalisation by location",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "The company has departments based on different beverage products, which is departmentalisation by product."
  },
  {
    questionNumber: 61,
    reference: "BAFS600C2Ch1-65",
    text: "Leo operates a traditional Chinese restaurant in Kwun Tong. To attract customers, he develops a mobile phone application for customers to reserve seats, with the goal “to shorten the waiting time drastically in the future.” Which of the following characteristics of a SMART goal are missing from the above goal?\n\n(1) measurable\n(2) relevant\n(3) time-framed",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct as it's not measurable. (2) is incorrect as it is relevant. (3) is correct as 'in the future' is not time-framed."
  }
];
