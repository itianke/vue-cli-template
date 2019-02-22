<template>
    <el-row class="header-bar" type="flex" align="middle">
        <el-col :span="12" align="left">
            <div class="logo">
                <img src="./src/assets/svg/logo-text.svg" class="menu-logo"/>
            </div>
            <el-dropdown class="el-dropdown-company-list" @visible-change="handleChange" v-if="enabledDropdown && isLogin" placement="bottom-start" @command="handleChangeOrg">
                <span class="el-dropdown-link">
                    <img v-if="defaultCompany.companyLogo" :src="defaultCompany.companyLogo" style="width: 40px; height: 30px; vertical-align: middle; margin-right: 16px;"/>
                    <icon name="org" width="18" color="#fff" v-else/>
                    <span>{{ defaultCompany.orgName }}</span>                           
                    <i class="el-icon--right" :class="isDropDownShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                </span>
                <el-dropdown-menu class="el-dropdown-subitem el-dropdown-org" slot="dropdown">
                    <el-dropdown-item v-for="(item, index) in companyList" :key="index" :command="item.companyId">
                        <img v-if="item.companyLogo" :src="item.companyLogo" style="width: 40px; height: 30px; vertical-align: middle; margin-right: 16px;"/>
                        <icon name="org" width="18" color="#fff" v-else />
                        <span>{{ item.orgName }}</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <el-col class="user-info" :span="12" align="right">
            <template v-if="isLogin">
            <div class="user-item">
                <span class="msg-item" style="padding: 0">
                    <el-dropdown class="el-dropdown-user-list" @visible-change="handleChangeUser">
                        <span class="el-dropdown-link">
                            <icon name="user" width="16" color="#fff"/>
                            <span>{{ userName }}</span>
                            <i class="el-icon--right" :class="isDropDownShowUser ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                        </span>
                        <el-dropdown-menu class="el-dropdown-subitem el-dropdown-user" slot="dropdown">
                            <el-row class="el-dropdown-user-content">
                                <el-row class="user-content-item">
                                    <el-col :span="8" class="nav">
                                        <a @click="handleRedirect('PAM', '/security/setting')">账号安全</a>
                                    </el-col>
                                    <el-col :span="8" class="nav">
                                        <a @click="handleRedirect('PAM', '/auth/user-auth')">账号认证</a>
                                    </el-col>
                                    <el-col :span="8" class="nav">
                                        <a @click="handleRedirect('PAM', '/security/setting')">修改密码</a>
                                    </el-col>
                                </el-row>
                                <el-col :span="24" class="user-console">
                                    <a class="console-btn" @click="handleRedirect('BBC', '/')">{{`进入控制中心`}}</a>
                                </el-col>
                                <el-col :span="24" align="right">
                                    <div class="user-logout" @click="userLogout">
                                        <icon icon="exit" width="14" color="#fff"></icon>
                                        <a @click="userLogout">退出</a>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </div>
            <div class="split-line"></div>
            <div class="user-item">
                <span class="msg-item">
                    <span class="msg-item-icon">
                        <icon icon="org" color="#fff" width="16" />
                    </span>
                    <span class="msg-item-label">
                        <a @click="handleToJoined('PAM')">
                            我加入的组织
                        </a>
                    </span>
                    <span class="el-msg-tag">{{ unTreated }}</span>
                </span>
            </div>
            <div class="user-item">
                <span class="msg-item" style="padding: 0">
                    <el-dropdown class="el-dropdown-message-list" @visible-change="handleChangeUser">
                        <span class="el-dropdown-link">
                            <icon name="message" width="16" color="#fff"/>
                            <span>消息中心</span>
                            <span class="el-msg-tag">{{ unReaded }}</span>
                        </span>
                        <el-dropdown-menu class="el-dropdown-subitem el-dropdown-message" slot="dropdown">
                            <el-row class="el-dropdown-message-content">
                                <div class="message-row" v-for="(message, index) in messages" :key="index" @click="handleRedirect('PMM', `/message/detail?id=${message.msgId}`)">
                                    <span class="message-title">{{ message.msgTitle }}</span>
                                    <span class="message-time">{{ message.recieveTime | dateTimeFormat }}</span>
                                </div>
                                <div class="message-more" @click="handleRedirect('PMM', '/received/all')">
                                    <span>
                                        <a>查看更多</a>
                                    </span>
                                </div>
                            </el-row>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </div>
            </template>
            <template v-else>
                <div class="user-item-unlogin">
                    <span class="msg-item">
                        <span class="msg-item-label">
                            <a @click="handleToPath('PAM', '/login')">
                               登录
                            </a>
                        </span>
                    </span>
                    <span class="msg-item">
                        <span class="msg-item-label">
                            <a @click="handleToPath('PAM', '/registry')">
                               注册
                            </a>
                        </span>
                    </span>
                </div>
            </template>
        </el-col>
    </el-row>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
