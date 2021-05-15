import { InjectionKey, reactive, ref, toRefs } from "vue";
import axios from "axios";

export const useSearch = () => {
  const result = ref<string[]>([]);
  const searchCondition = reactive<{
    title: string;
    category: string[];
    author: string;
  }>({
    title: "",
    category: [],
    author: "",
  });

  const showResult = ref(false);

  const search = async () => {
    const params = {
      title: searchCondition.title,
      category: searchCondition.category,
      author: searchCondition.author,
    };

    // 表示用
    console.log(searchCondition);
    showResult.value = true;

    // const res = await axios.get<string[]>("/posts", { params });
    // result.value = res.data;
  };

  return {
    ...toRefs(searchCondition),
    result,
    search,
    showResult,
  };
};

export type SearchContext = ReturnType<typeof useSearch>;

export const SearchKey: InjectionKey<SearchContext> = Symbol("SearchContext");
