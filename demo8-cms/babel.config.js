module.exports = {
    presets: [
        '@vue/app',
    ],
    plugins: [
        //移除严格模式
        "transform-remove-strict-mode",
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ],
    //移除严格模式
    ignore: [
        "./src/lib/mui/js/*.js"]
}
