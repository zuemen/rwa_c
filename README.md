# RWA Realty Capital

一個以 React 建構的 RWA 房地產概念網站，靈感來自 RealT 與 Homebase，強調：

- 房地產資產代幣化敘事
- ERC 智能合約選型建議
- 研究驅動的品牌與募資定位
- 國際化、高影響力的產品視覺

## Run locally

這個專案使用無建置流程的 React UMD 方式，直接啟動靜態伺服器即可：

```bash
python3 -m http.server 4173
```

然後打開 <http://localhost:4173>。

## Recommended contract direction

- **Primary issuance/compliance:** ERC-3643
- **Advanced security-token rights:** ERC-1400
- **Auxiliary liquidity / basket shares:** ERC-20 or ERC-1155
