const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小游戏 App ID
    appId: 'wx24a6e806a76c3eea',

    // 微信小游戏 App Secret
    appSecret: 'd5a1e3807beff206a38d2aae5bbd5b93',

    // 是否使用腾讯云代理登录小游戏
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小游戏解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小游戏 appid
     */
    mysql: {
      host: 'https://045usmut.qcloud.la',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx24a6e806a76c3eea',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
