import newsService from '@/services/newsService'

const state = {
  newsList: []
}

const getters = {
  newsList: state => {
    return state.newsList
  }
}

const actions = {
  getNews ({ commit }, payload) {
    newsService.fetchNews(payload)
    .then(res => {
      commit('setNews', res)
    })
  },
//   addMessage({ commit }, message) {
//     messageService.postMessage(message)
//     .then(() => {
//       commit('addMessage', message)
//     })
//   },
//   deleteMessage( { commit }, msgId) {
//     messageService.deleteMessage(msgId)
//     commit('deleteMessage', msgId)
//   }
}

const mutations = {
  setNews (state, news) {
    var newsList = []
    // eslint-disable-next-line
    console.log(news)
    news.results.forEach((result) => {
        newsList.push({
            "title": result.title.raw,
            "imgSrc": result.image_url ? result.image_url.raw : '',
            "mainText": result.maintext ? result.maintext.raw : '',
            "authors": result.authors ? result.authors.raw : '',
            "url": result.url ? result.url.raw : '',
            "time": result.date_publish ? result.date_publish.raw : '???',
            "id": result.id.raw
        });
    });
    // eslint-disable-next-line
    console.log(newsList)
    state.newsList = newsList
  },
//   addMessage(state, message) {
//     state.messages.push(message)
//   },
//   deleteMessage(state, msgId) {
//     state.messages = state.messages.filter(obj => obj.pk !== msgId)
//   }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}