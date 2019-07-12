'use strict'

module.exports = function (api) {
  return {

    update_token(access_key,secret_key, callback) {
      return api.update({
        url: `auth`,
        data: {access_key:access_key,secret_key:secret_key}
      }, callback)
    },

    get_seasons_data(sid=0,args={}, callback) {
      if(sid){
        let path = 'season/'+sid+'/competitions';
      }else{
        let path = 'seasons';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competitions_data(cid=0,args={}, callback) {
        if(cid){
          let path = 'competition/'+cid;
        }else{
          let path = 'competitions';
        }
        return api.get({
            url: path,
            data: args,
        }, callback)
    },

    get_competition_squad(cid,args={}, callback) {
      let path = 'competition/'+cid+'/squad';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_matches(cid,args={}, callback) {
      let path = 'competition/'+cid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_standings(cid,args={}, callback) {
      let path = 'competition/'+cid+'/standings';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_statstic(cid,args={}, callback) {
      let path = 'competition/'+cid+'/stats';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_data(mid=0,args={}, callback) {
      if(mid){
        let path = 'matches/'+mid+'/info';
      }else{
        let path = 'matches';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_stats(mid,args={}, callback) {
      let path = 'matches/'+mid+'/stats';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_data(tid=0,args={}, callback) {
      if(tid){
        let path = 'team/'+tid+'/info';
      }else{
        let path = 'teams';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_maches(tid,args={}, callback) {
      let path = 'team/'+tid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_players_data(pid=0,args={}, callback) {
      if(pid){
        let path = 'player/'+pid+'/profile';
      }else{
        let path = 'players';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

  }
}