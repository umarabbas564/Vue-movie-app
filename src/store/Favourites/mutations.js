export default {
  setFavouriteList(state, payload) {
    // state.favouritesList[payload.id] = payload;
    // let getList=localStorage.getItem('favList')
    // getList.push(payload)
    // debugger
    const data = {
      id: payload.id,
      poster_path: payload.poster_path,
      title: payload.original_title,
      overview: payload.overview.substr(0, 100),
    };

    let localArr = JSON.parse(localStorage.getItem("favList")) || [];
    let existingId = localArr.some((i) => i.id === data.id);
    if (existingId) {
      alert("Movie already added");
    } else {
      localArr.push(data);
      localStorage.setItem("favList", JSON.stringify(localArr));
      alert("Movie added to favorite");
      state.favouritesList = localArr;
    }
  },
  removeItem(state, payload) {
    let localArr = JSON.parse(localStorage.getItem("favList")) || [];
    localArr = localArr.filter(item=> item.id !== payload.id)
    state.favouritesList = localArr;
    localStorage.setItem("favList", JSON.stringify(localArr))
  },
};
