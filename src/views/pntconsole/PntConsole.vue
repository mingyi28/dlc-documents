<template>
    <PntConsoleMain>
      <div class="social">
        <h1>社交系统</h1>
        <section class="features">
          <h2>功能特点</h2>
          <ul>
            <li v-for="feature in features" :key="feature.title">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </li>
          </ul>
        </section>
      </div>
    </PntConsoleMain>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import PntConsoleMain from './PntConsoleMain.vue'
  
  export default defineComponent({
    name: 'SocialView',
    components: {
      PntConsoleMain
    },
    data() {
      return {
        features: [
          {
            title: '好友系统',
            description: '支持好友添加、删除、分组管理，以及好友在线状态显示等功能'
          },
          {
            title: '群组系统',
            description: '支持群组创建、管理、成员权限设置，以及群组消息等功能'
          },
          {
            title: '聊天系统',
            description: '支持一对一聊天、群组聊天，支持文字、表情、图片等多种消息类型'
          },
          {
            title: '社交动态',
            description: '支持动态发布、评论、点赞，以及个人动态墙等功能'
          }
        ]
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .social {
    section {
      margin-bottom: 40px;
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
  
      h1, h2 {
        margin-bottom: 20px;
        color: #333;
      }
  
      p {
        line-height: 1.6;
        color: #666;
      }
  
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
  
        li {
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
          color: #444;
  
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .social {
      section {
        padding: 15px;
        margin-bottom: 20px;
      }
    }
  }
  </style> 