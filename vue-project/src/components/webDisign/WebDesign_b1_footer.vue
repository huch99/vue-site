<template>
    <div class="footerW">
            <div class="footer-logo">대한은행</div>
            <div class="footer-subContainer">
                <div class="footer-menu">하단 메뉴</div>
                <div class="footer-copyright">Copyright</div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
/* 푸터 영역 */
.footerW {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: #10106b;
}

.footer-logo {
    width: 200px;
    height: 100%;
    color: #fff;
    text-align: center;
}

.footer-subContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.footer-subContainer>div {
    width: 100%;
    height: 50%;
    text-align: center;
    color: #fff;
}

/* 푸터 영역 */
</style>