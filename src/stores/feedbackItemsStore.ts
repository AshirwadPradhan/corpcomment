import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  error: string;
  selectedCompany: string;
  companyList: string[];
  addItemsToList: (newFeedback: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  loading: false,
  error: "",
  selectedCompany: "",
  companyList: [],
  addItemsToList: async (newFeedback: string) => {
    const company = newFeedback
      .split(" ")
      .find((word) => word.startsWith("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company: company,
      text: newFeedback,
      daysAgo: 0,
    };
    set((state) => ({
      feedbackItems: [newItem, ...state.feedbackItems],
    }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  },
  selectCompany: (company: string) => {
    set({ selectedCompany: company });
  },
  fetchFeedbackItems: () => {
    set({ loading: true });
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        set({ loading: false, feedbackItems: data.feedbacks });
      })
      .catch(() => {
        set({ loading: false, error: "Something went wrong" });
      });
  },
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((v, i, a) => a.indexOf(v) === i);
  },
  getFilteredFeedbackItems: () => {
    return get().selectedCompany
      ? get().feedbackItems.filter(
          (item) => item.company === get().selectedCompany
        )
      : get().feedbackItems;
  },
}));
