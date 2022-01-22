require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: `${process.env.ALCHEMY.RINKEBY.URL}`,
            accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
        }
    }
};