<template>
  <div class="side-nav-bar" :class="{ collapsed: isCollapsed }">
    <div v-for="category in categories" :key="category.title" class="category-section">
      <div class="category-title">
        <h3>{{ category.title }}</h3>
        <div class="divider"></div>
      </div>
      <ul>
        <li v-for="item in category.items" :key="item.text">
          <div class="nav-item" :class="{ 'has-children': item.children }">
            <span v-if="item.children" @click.stop="toggleSubItems(item)" class="menu-text">
              {{ item.text }}
              <span class="toggle-subitems">{{ item.expanded ? '▼' : '▶' }}</span>
            </span>
            <router-link v-else :to="item.link">{{ item.text }}</router-link>
          </div>
          <transition name="slide">
            <ul v-if="item.children && item.expanded" class="submenu">
              <li v-for="subItem in item.children" :key="subItem.text">
                <div class="nav-item" :class="{ 'has-children': subItem.details }">
                  <span v-if="subItem.details" @click.stop="toggleDetails(subItem)" class="menu-text sub-item">
                    {{ subItem.text }}
                    <span class="toggle-subitems">{{ subItem.detailsExpanded ? '▼' : '▶' }}</span>
                  </span>
                  <router-link v-else :to="subItem.link" class="sub-item">{{ subItem.text }}</router-link>
                </div>
                <transition name="slide">
                  <ul v-if="subItem.details && subItem.detailsExpanded" class="details-menu">
                    <li v-for="detail in subItem.details" :key="detail.text">
                      <div class="detail-item">
                        <router-link v-if="detail.link" :to="detail.link" class="detail-link">
                          {{ detail.text }}
                        </router-link>
                        <div v-else-if="detail.buttons" class="detail-buttons">
                          <button
                            v-for="btn in detail.buttons"
                            :key="btn.text"
                            @click="handleButtonClick(btn)"
                            :class="['detail-button', btn.type]"
                          >
                            {{ btn.text }}
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
    <button @click="toggleCollapse" class="toggle-button">
      {{ isCollapsed ? '>' : '<' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleSubItems(item) {
      item.expanded = !item.expanded;
    },
    toggleDetails(subItem) {
      subItem.detailsExpanded = !subItem.detailsExpanded;
    },
    handleButtonClick(btn) {
      if (btn.onClick) {
        btn.onClick();
      }
      this.$emit('button-click', btn);
    }
  }
};
</script>

<style scoped>
.side-nav-bar {
  width: 240px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #f8f9fa;
  padding: 60px 10px 10px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 60px;
  left: 0;
  transition: width 0.3s ease;
}

.side-nav-bar.collapsed {
  width: 60px;
  padding: 60px 0 10px;
}

.category-section {
  margin-bottom: 30px;
}

.category-section ul > li {
  padding-left: 0;
  border-bottom: 1px solid #eee;
}

.category-section ul > li:last-child {
  border-bottom: none;
}

.category-title {
  padding: 0 10px;
  margin-bottom: 20px;
  background-color: #e9e9e9;
}

.category-title h3 {
  color: #333;
  font-size: 16px;
  margin: 0;
  padding: 10px 0;
}

.divider {
  height: 1px;
  background-color: #a9a9a9;
  margin: 5px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item.has-children {
  cursor: pointer;
}

.nav-item .menu-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  color: #333;
  width: 100%;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border-radius: 6px;
  margin: 0;
  font-weight: 500;
}

.nav-item .menu-text:hover {
  color: #007bff;
  background-color: transparent;
}

.submenu {
  padding-left: 20px;
  margin: 0 0 8px 0;
}

.submenu .nav-item .menu-text,
.submenu .sub-item {
  background-color: transparent;
  padding: 6px 25px;
  font-size: 0.95em;
  border-radius: 4px;
  margin: 2px 0;
  color: #333;
}

.submenu .nav-item .menu-text:hover,
.submenu .sub-item:hover {
  background-color: rgba(0, 123, 255, 0.1);
  color: #333;
}

.details-menu {
  padding-left: 24px;
  margin-top: 5px;
}

.detail-item {
  padding: 4px 25px;
  font-size: 0.9em;
}

.detail-link {
  color: #666;
  text-decoration: none;
  display: block;
  padding: 6px 12px;
  background-color: transparent;
  border-radius: 4px;
  margin: 2px 0;
}

.detail-link:hover {
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}

.detail-buttons {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
}

.detail-button {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 0.85em;
  transition: all 0.2s ease;
  margin: 2px 0;
}

.detail-button:hover {
  background: #e9ecef;
  border-color: #007bff;
  color: #007bff;
}

.detail-button.primary {
  background: #007bff;
  color: white;
  border-color: #0056b3;
}

.detail-button.primary:hover {
  background: #0056b3;
}

.detail-button.secondary {
  background: #6c757d;
  color: white;
  border-color: #545b62;
}

.detail-button.secondary:hover {
  background: #545b62;
}

.toggle-subitems {
  font-size: 12px;
  margin-left: 8px;
  transition: transform 0.3s ease;
  color: #6c757d;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.side-nav-bar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.side-nav-bar li {
  margin: 8px 0;
}

.side-nav-bar > div > ul > li > .nav-item > a {
  display: block;
  padding: 12px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.2s ease;
  background-color: transparent;
  margin: 0;
  font-weight: 500;
}

.side-nav-bar > div > ul > li > .nav-item > a:hover {
  background-color: transparent;
  color: #007bff;
}

.submenu a {
  background-color: transparent !important;
}

.toggle-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
