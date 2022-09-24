<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        :placement="activity.placement"
        :hide-timestamp="activity.hideTimestamp"
        :type="activity.type"
        :icon="activity.icon"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    return reactive({
      activities: [{
        content: 'Step 1: xxxxxx',
        timestamp: '2022-09-20',
        placement: 'top',
      }, {
        content: 'Step 2: xxxxxx',
        timestamp: '2022-09-21',
        hideTimestamp: true,
      }, {
        content: 'Step 3: xxxxxx',
        timestamp: '2022-09-22',
        type: 'large',
        icon: 'el-icon-more',
      },{
        content: 'Step 4: xxxxxx',
        timestamp: '2022-09-23',
        type: 'primary',
      }],
    })
  },
})
</script>
