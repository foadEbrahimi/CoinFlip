import bitcoin from "/assets/images/MarketTrend/bitcoin.png";
import etherium from "/assets/images/MarketTrend/etherium.svg";
import bnb from "/assets/images/MarketTrend/bnb.svg";
import usdt from "/assets/images/MarketTrend/usdt.svg";
import solana from "/assets/images/MarketTrend/solana.svg";
import xrp from "/assets/images/MarketTrend/xrp.svg";
import usdCoin from "/assets/images/MarketTrend/usdCoin.svg";

import faetures1 from "/assets/images/Faetures/feature-image1.svg";
import faetures2 from "/assets/images/Faetures/feature-image2.svg";
import faetures3 from "/assets/images/Faetures/feature-image3.svg";
import faetures4 from "/assets/images/Faetures/feature-image4.svg";

import chart1 from "/assets/images/MarketTrend/chart1.svg";
import chart2 from "/assets/images/MarketTrend/chart2.svg";

import img1GetStarted from "/assets/images/GetStarted/img1.svg";
import img2GetStarted from "/assets/images/GetStarted/img2.svg";
import img3GetStarted from "/assets/images/GetStarted/img3.svg";

import img1Blog from "/assets/images/Blog/cryptoBase.png";
import img2Blog from "/assets/images/Blog/personalBank.png";
import img3Blog from "/assets/images/Blog/cryptoWallet.png";
import img4Blog from "/assets/images/Blog/bitcoin.png";
import img5Blog from "/assets/images/Blog/bestTime.png";
import img6Blog from "/assets/images/Blog/defi.png";

export const Navlist = [
  {
    id: 1,
    label: "Buy / Sell",
  },
  {
    id: 2,
    label: "Grow",
  },
  {
    id: 3,
    label: "Markets",
  },
  {
    id: 4,
    label: "Business",
  },
  {
    id: 5,
    label: "Support",
  },
];
export const MarketTrending = [
  {
    id: 1,
    img: bitcoin,
    label: "BTC",
    badge: "bitcoin",
    price: "56,623.54",
    percentage: "1.41",
    delay: 0,
  },
  {
    id: 2,
    img: etherium,
    label: "ETH",
    badge: "ETHEREUM",
    price: "4,267.90",
    percentage: "2.22",
    delay: 0.9,
  },
  {
    id: 3,
    img: bnb,
    label: "BNB",
    badge: "BINANCE",
    price: "587.74",
    percentage: "0.82",
    delay: 1.3,
  },
  {
    id: 4,
    img: usdt,
    label: "USDT",
    badge: "TETHER",
    price: "0.9998",
    percentage: "0,03",
    delay: 1.7,
  },
];
export const FaeturesInfo = [
  {
    id: 1,
    img: faetures1,
    title: "Manage Portfolio",
    decs: "Buy and sell popular digital currencies, keep track of them in the one place.",
  },
  {
    id: 2,
    img: faetures2,
    title: "Protected Securely",
    decs: "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
  },
  {
    id: 3,
    img: faetures3,
    title: "Cryptocurrency Variety",
    decs: "Supports a variety of the most popular digital currencies and always uptodate.",
  },
  {
    id: 4,
    img: faetures4,
    title: "Learn Best Practice",
    decs: "Easy to know how to cryptocurrency works and friendly to newbie.",
  },
];
export const TableInfo = [
  {
    id: 1,
    img: bitcoin,
    name: "Bitcoin",
    lastPrice: "56,623.54",
    change: "1.41",
    marketStats: chart1,
    symbol: "btc",
  },
  {
    id: 2,
    img: etherium,
    name: "Ethereum",
    lastPrice: "4,267.90",
    change: "2.22",
    marketStats: chart1,
    symbol: "eth",
  },
  {
    id: 3,
    img: bnb,
    name: "Binance",
    lastPrice: "587.74",
    change: "-0.82",
    marketStats: chart1,
    symbol: "bnb",
  },
  {
    id: 4,
    img: usdt,
    name: "Tether",
    lastPrice: "0.9998",
    change: "-0.03",
    marketStats: chart1,
    symbol: "usdt",
  },
  {
    id: 5,
    img: solana,
    name: "Solana",
    lastPrice: "213.67",
    change: "-0.53",
    marketStats: chart2,
    symbol: "sol",
  },
  {
    id: 6,
    img: xrp,
    name: "XRP",
    lastPrice: "1.04",
    change: "-0.44",
    marketStats: chart2,
    symbol: "xrp",
  },
  {
    id: 7,
    img: usdCoin,
    name: "USD Coin",
    lastPrice: "1.00",
    change: "-0.03",
    marketStats: chart2,
    symbol: "usdc",
  },
];
export const GetStartedInfo = [
  {
    id: 1,
    label: "Create Your Account",
    desc: "Your account and personal identity are guaranteed safe.",
    img: img1GetStarted,
  },
  {
    id: 2,
    label: "Connect Bank Account",
    desc: "Connect the bank account to start transactions.",
    img: img2GetStarted,
  },
  {
    id: 3,
    label: "Start Build Portfolio",
    desc: "Buy and sell popular currencies and keep track of them.",
    img: img3GetStarted,
  },
];
export const BlogInfo = [
  {
    id: 1,
    label: "What is cryptocurrency? all you need to know",
    tag: "CRYPTO BASIC",
    desc: "Cryptocurrencies are basically digital assets. It is secured by cryptography.. ",
    img: img1Blog,
  },
  {
    id: 2,
    label: "Can crypto really replace your bank account?",
    tag: "CRYPTO BASIC",
    desc: "From direct deposit to earning yield, key ways crypto can help you take control..",
    img: img2Blog,
  },
  {
    id: 3,
    label: "How to setup crypto wallet in your account",
    tag: "TIPS & TRICKS",
    desc: "A crypto wallet is a place where you can securely keep your crypto.. ",
    img: img3Blog,
  },
  {
    id: 4,
    label: "The fact about bitcoin must you know",
    tag: "CRYPTO BASIC",
    desc: "Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.. ",
    img: img4Blog,
  },
  {
    id: 5,
    label: "When is the best time to invest in crypto?",
    tag: "TIPS & TRICKS",
    desc: "When prices are fluctuating, how do you know when to buy?",
    img: img5Blog,
  },
  {
    id: 6,
    label: "What Is DeFi? Inside the Wild West of Cryptocurrency.",
    tag: "TIPS & TRICKS",
    desc: "Welcome to decentralized finance or DeFi, the new frontier of crypto that will..",
    img: img6Blog,
  },
];
