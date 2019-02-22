<template>
    <div class="footer-content">
        <div class="footer-items flex-between">
            <ul class="footer-row">
                <li>
                    <a @click="handleOpen(`${config.api.PLZ}/enginner-cloud`)">领筑工程云</a>
                </li>
                <li>
                    <a @click="handleOpen('http://www.lingzhubuy.com/bidding/index.html#/common/aboutUs')">领筑电商</a>
                </li>
                <li>
                    <a @click="handleOpen(maintenanceUrl)">领筑维保</a>
                </li>
                <li>
                    <a @click="handleOpen('http://www.lingzhujinfu.com/')">领筑金服</a>
                </li>
                <li>
                    <a @click="handleOpen(labourServiceUrl)">领筑劳务</a>
                </li>
            </ul>
            <ul class="footer-row">
                <li>
                    <a @click="toModule('PAM', protocolUrl)">用户服务协议</a>
                </li>
                <li>
                    <a @click="toModule('PAM', privacyUrl)">隐私声明</a>
                </li>
            </ul>
        </div>
        <div class="footer-items flex-end">
            <ul class="footer-row">
                <li>
                    <a> © Copyright 2012-2018 深圳智慧建设科技有限公司  |  粤ICP备16075420号-2</a>
                </li>
            </ul>
        </div>
        <div class="footer-items flex-end">
            <ul class="footer-row">
                <li class="noline">
                    <a>
                        <img src="/static/ke.png" />
                    </a>
                </li>
                <li class="noline">
                    <a>
                        <img src="/static/an.png" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>