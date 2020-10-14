import * as regulationsContrast from './regulations-contrast'

function mount () {
  this.$api['getLawsList'] = regulationsContrast.getLawsList
  this.$api['creatContrast'] = regulationsContrast.creatContrast
  this.$api['getContrastStatus'] = regulationsContrast.getContrastStatus
  this.$api['getContrastResult'] = regulationsContrast.getContrastResult
  this.$api['downloadContrastResultURL'] = regulationsContrast.downloadContrastResultURL
  this.$api['submitFeedback'] = regulationsContrast.submitFeedback
}

export default {
  mount
}
