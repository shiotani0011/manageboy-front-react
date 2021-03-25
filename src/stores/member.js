import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchMember } from "../apis/member.api";

// @topic createEntityAdapter https://www.cyokodog.net/blog/redux-toolkit-entity-adapter/

export const membersAdapter = createEntityAdapter(); // アダプタを定義
const memberInitialEntityState = membersAdapter.getInitialState(); // アダプタの初期状態を取得

// sliceを作る
const slice = createSlice({
  name: "member",
  initialState: memberInitialEntityState,
  reducers: {
    getMemberDetailRequest: (state) => {},
    getMemberDetailSuccess: (state, action) => {
      console.log(action.payload);
      state.member = action.payload;
    },
    getMemberDetailFailure: () => {},
  },
});

export default slice.reducer;

export const {
  getMemberDetailRequest,
  getMemberDetailSuccess,
  getMemberDetailFailure,
} = slice.actions;

// メンバーの新規作成

// メンバーの一覧

// メンバーの詳細
export const getMemberDetail = (memberId) => async (dispatch) => {
  // メンバー詳細の取得
  try {
    const { member } = await fetchMember(memberId);
    dispatch(getMemberDetailSuccess(member));
  } catch (error) {
    console.error(error);
    dispatch(getMemberDetailFailure());
  }
};
// メンバーの編集

// メンバーの削除
