# React Vite 19 – Optimized (React Compiler)

## 🔗 Basierend auf Originalcode
Dieses Repository basiert auf dem Open-Source-Projekt [Health-Plus](https://github.com/Alkaison/Health-Plus) (MIT License).

## Beschreibung
Dieses Repository enthält eine optimierte Landingpage mit **React 19** und **Vite**, unter Nutzung des **React Compilers**.

## Zweck im Rahmen der Bachelorarbeit
Diese Version dient zur Untersuchung, inwiefern der **React Compiler**:
- unnötige Re-Renders reduziert
- den Ressourcenverbrauch senkt
- manuelle Memoization teilweise ersetzt

## Implementierte Optimierungen
- Alle Optimierungen aus React 18
- Automatische Optimierungen durch den React Compiler
- Reduzierter Bedarf an useMemo / useCallback

## Technischer Stack
- React 19
- Vite
- Tailwind CSS
- React Compiler

## Messergebnisse
### Webcarbon
![Webcarbon Ergebnis](/webcarbon.png)
### Ecograder
![Ecograder Ergebnis1](/ecograder1.png)
![Ecograder Ergebnis2](/ecograder2.png)
###DigitalBeacon
![Digital Beacon Ergebnis1](/db1.png)
![Digital Beacon Ergebnis2](/db2.png)
### Chrome Dev Tools
![Chrome Dev Tools HTML](/devhtml.png)
![Chrome Dev Tools Styles](/devstyles.png)
![Chrome Dev Tools Images](/devimages.png)
![Chrome Dev Tools Scripts](/devscripts.png)
