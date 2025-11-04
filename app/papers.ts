export type Paper = {
  id: string;
  title: string;
  authors: string;
  year: number;
  summary: string;
  whyItMatters?: string;
  readingTips?: string;
  keyTakeaways?: string[];
  links: { label: string; url: string }[];
};

export const papers: Paper[] = [
  {
    id: "domingos-2012-few-useful",
    title: "A Few Useful Things to Know About Machine Learning",
    authors: "Pedro Domingos",
    year: 2012,
    summary:
      "A practitioner-oriented overview that distills common pitfalls and heuristics across ML workflows: data leakage, overfitting, evaluation traps, and debugging strategies.",
    whyItMatters:
      "It grounds you in the realities of building ML systems before fancy models?perfect for your first projects.",
    readingTips:
      "Skim the section headers first, then read fully and take notes; revisit before training any new model.",
    keyTakeaways: [
      "Generalization > training accuracy.",
      "Leakage and spurious correlations are everywhere?be suspicious.",
      "Evaluation design strongly shapes outcomes.",
      "Simpler baselines are hard to beat without data/feature gains."
    ],
    links: [
      { label: "PDF (CACM)", url: "https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf" },
      { label: "ACM page", url: "https://dl.acm.org/doi/10.1145/2347736.2347755" }
    ]
  },
  {
    id: "lecun-bengio-hinton-2015-deeplearning",
    title: "Deep Learning (Review)",
    authors: "Yann LeCun, Yoshua Bengio, Geoffrey Hinton",
    year: 2015,
    summary:
      "A broad, accessible review of deep learning?s core ideas?representations, convolutional nets, sequence models?and historical context.",
    whyItMatters:
      "Provides a high-level map of the field, helping beginners develop intuition before diving into specifics.",
    readingTips:
      "Read for concepts, not equations; keep a separate note of model families and where they apply.",
    keyTakeaways: [
      "Representation learning reduces feature engineering.",
      "Convolutions exploit locality and weight sharing.",
      "End-to-end learning benefits from large datasets and compute."
    ],
    links: [
      { label: "Nature page", url: "https://www.nature.com/articles/nature14539" },
      { label: "arXiv", url: "https://arxiv.org/abs/1404.7828" }
    ]
  },
  {
    id: "burges-1998-svm-tutorial",
    title: "A Tutorial on Support Vector Machines for Pattern Recognition",
    authors: "Christopher J.C. Burges",
    year: 1998,
    summary:
      "A friendly tutorial on SVMs?margins, kernels, and optimization?showing how powerful linear methods can become with the right feature spaces.",
    whyItMatters:
      "Teaches core ideas about margins, regularization, and kernels that transfer to many models beyond SVMs.",
    readingTips:
      "Focus on the geometric intuition; do not get stuck in derivations on first pass.",
    keyTakeaways: [
      "Large margins often generalize better.",
      "Kernel trick enables nonlinear decision boundaries with linear solvers.",
      "Regularization balances fit and complexity."
    ],
    links: [
      { label: "Kluwer PDF", url: "https://link.springer.com/content/pdf/10.1023/A:1009715923555.pdf" },
      { label: "Springer page", url: "https://link.springer.com/article/10.1023/A:1009715923555" }
    ]
  },
  {
    id: "halevy-norvig-pereira-2009-unreasonable-data",
    title: "The Unreasonable Effectiveness of Data",
    authors: "Alon Halevy, Peter Norvig, Fernando Pereira",
    year: 2009,
    summary:
      "An argument that with enough (and diverse) data, simple models can outperform complex ones?emphasizing data quality and scale over algorithmic novelty.",
    whyItMatters:
      "Instills a data-first mindset?crucial for real-world ML where data collection and curation dominate outcomes.",
    readingTips:
      "Reflect on how you can create richer datasets for your projects.",
    keyTakeaways: [
      "Data variety often trumps complex models.",
      "Linguistic/semantic ambiguity can be handled statistically at scale.",
      "Infrastructure for data is as important as models."
    ],
    links: [
      { label: "Google Research (PDF)", url: "https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35179.pdf" }
    ]
  },
  {
    id: "jordan-mitchell-2015-ml-survey",
    title: "Machine Learning: Trends, Perspectives, and Prospects",
    authors: "Michael I. Jordan, Tom M. Mitchell",
    year: 2015,
    summary:
      "A high-level survey of ML subfields, applications, and research directions, placing modern ML in a broader scientific and societal context.",
    whyItMatters:
      "Helps you see the forest before the trees?great for orienting your learning journey and career choices.",
    readingTips:
      "Skim breadth-first, then dive into sections aligned with your interests.",
    keyTakeaways: [
      "ML spans supervised, unsupervised, and reinforcement learning with different objectives.",
      "Applications require domain knowledge, data stewardship, and evaluation culture.",
      "Open problems include robustness, causality, interpretability, and fairness."
    ],
    links: [
      { label: "Science page", url: "https://www.science.org/doi/10.1126/science.aaa8415" }
    ]
  }
];
