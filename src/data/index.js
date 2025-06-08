// En: /src/data/index.js

// --- Temas Procesados ---
import { theme01Data } from './theme-01.js';
import { theme02Data } from './theme-02.js';
import { theme03Data } from './theme-03.js';
import { theme04Data } from './theme-04.js';
import { theme05Data } from './theme-05.js';
import { theme06Data } from './theme-06.js';
import { theme07Data } from './theme-07.js';
import { theme08Data } from './theme-08.js';
import { theme09Data } from './theme-09.js';
import { theme10Data } from './theme-10.js';
import { theme13Data } from './theme-13.js';
import { theme15Data } from './theme-15.js';
import { theme16Data } from './theme-16.js';
import { theme17Data } from './theme-17.js';
import { theme19Data } from './theme-19.js';
import { theme20Data } from './theme-20.js';
import { theme21Data } from './theme-21.js';
import { theme25Data } from './theme-25.js';
import { theme29Data } from './theme-29.js';
import { theme36Data } from './theme-36.js';
import { theme39Data } from './theme-39.js';
import { theme46Data } from './theme-46.js';
import { theme61Data } from './theme-61.js';
import { theme62Data } from './theme-62.js';
import { theme63Data } from './theme-63.js';
import { theme64Data } from './theme-64.js';
import { theme67Data } from './theme-67.js';
import { theme68Data } from './theme-68.js';
import { theme69Data } from './theme-69.js';
import { theme71Data } from './theme-71.js';
import { theme74Data } from './theme-74.js';

// --- Plantilla para Temas Pendientes ---
const createPlaceholderTheme = (id, name, title) => ({
  id: `theme${id}`,
  name: name,
  title: title,
  version: "Contenido pendiente",
  sections: [
    {
      id: `t${id}_s1`,
      shortTitle: "1. Contenido",
      title: "Contenido en Proceso",
      content: [
        {
          type: 'paragraph',
          text: `El contenido para el ${name} está siendo procesado y estará disponible próximamente.`
        }
      ]
    }
  ]
});

// --- Lista Completa de Temas ---
export const allThemesData = [
  theme01Data,
  theme02Data,
  theme03Data,
  theme04Data,
  theme05Data,
  theme06Data,
  theme07Data,
  theme08Data,
  theme09Data,
  theme10Data,
  theme13Data,
  theme15Data,
  theme16Data,
  theme17Data,
  theme19Data,
  theme20Data,
  theme21Data,
  theme25Data,
  theme29Data,
  theme36Data,
  theme39Data,
  theme46Data,
  theme61Data,
  theme62Data,
  theme63Data,
  theme64Data,
  theme67Data,
  theme68Data,
  theme69Data,
  theme71Data,
  theme74Data,
];