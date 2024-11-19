import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { createComment, getComments } from "@/api/comment";
import { IFetchCommentItem } from "@components/comment/hooks/interface";

interface CommentState {
  commentList: IFetchCommentItem[];
}
const initialState: CommentState = {
  commentList: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCommentList(state, action) {
      state.commentList = action.payload;
    },
  },
});
const { setCommentList } = commentSlice.actions;

const getCommentsByArticleId = (articleId: number, visitorId?: number) => {
  return async (dispatch: Dispatch) => {
    const res = await getComments({ articleId, visitorId });
    dispatch(setCommentList(res.data.data));
  };
};

export { getCommentsByArticleId };
export default commentSlice.reducer;
