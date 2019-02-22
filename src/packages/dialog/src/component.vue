<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div class="el-dialog" :class="[{ 'is-fullscreen': fullscreen, 'el-dialog--center': center }, customClass]" ref="zhdialog" :style="style">
        <div class="el-dialog__header">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered">
            <slot></slot>
        </div>
        <div class="el-dialog__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>