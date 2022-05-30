import api from '@/services/api'

export default {
  fetchNews(keywords) {
    // eslint-disable-next-line
    console.log(api.post(`news/`, {keywords: keywords})
                   .then(response => response.data))
    return;
  },
  // postMessage(payload) {
  //   return api.post(`messages/`, payload)
  //             .then(response => response.data)
  // },
  // deleteMessage(msgId) {
  //   return api.delete(`messages/${msgId}`)
  //             .then(response => response.data)
  // }
}
