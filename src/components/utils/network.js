import axios from 'axios';
import { PRODUCT_URL, NEWS_URL, TEAM_URL } from '../../constants/Api';
import React, { useState, useEffect } from 'react';

export const getApi = {
  async project() {
    const res = await axios.get(PRODUCT_URL)
    return res.data
  },
  async projectCategory(category) {
    const res = await axios.get(PRODUCT_URL + `/?category=${category}`)
    return res.data
  },
  async news() {
    const res = await axios.get(NEWS_URL)
    return res.data
  },
  async newsId(id) {
    const res = await axios.get(NEWS_URL + `/${id}`)
    return res.data
  },
  async teamDB() {
    const res = await axios.get(TEAM_URL)
    return res.data
  }
}

export const NewsData = () => {
  const [newsDB, setNewsDB] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi.news()
      setNewsDB(data)
    }
    fetchData()
  }, [])

  return (
    newsDB
  );
}

