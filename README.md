<div align="center">

# Phil's PF2e AI Translator (Russian)

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![System](https://img.shields.io/badge/System-PF2e-blue?style=flat-square)
![License](https://img.shields.io/badge/License-GPLv3_%2F_CC_BY--NC--ND-blue?style=flat-square)

<br>

**Умный помощник для перевода журналов Foundry VTT с английского на русский.**

<br>

<a href="#-инструкция-на-русском"><img src="https://img.shields.io/badge/%20-Русская_инструкция-black?style=for-the-badge&logo=russia&logoColor=white" alt="Русская инструкция"></a> <a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a>

</div>

<br>

> [!CAUTION]
>
> ### ⚖️ Только для личного использования
>
> Переводы произведений, защищённых авторским правом (например, приключений Pathfinder), созданные с помощью этого модуля, могут использоваться **только в личных целях**. Публикация, распространение или коммерческое использование (продажа) запрещены.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/ru.png" width="28" height="21" alt="RU"> Инструкция на русском

**Автоматизированный перевод журналов Foundry VTT с помощью ИИ**

Этот модуль помогает быстро и качественно переводить **большие приключенческие модули** или длинные тексты в Foundry VTT. Оптимизирован для **PF2e**, но работает независимо от системы.

## 🚀 Ключевые возможности

- **Без затрат на API:** Работает с бесплатными веб-версиями Gemini, ChatGPT и др.
- **Пакетный перевод:** Переводите несколько страниц за раз.
- **Поддержка глоссария:** Автоматически создаёт глоссарий имён и терминов для единообразия перевода.
- **Умная вставка:** Автоматически находит и извлекает JSON-блок из ответа ИИ.
- **Интеграция официальных переводов:** Проверяет установленный модуль русского перевода PF2e для обеспечения соответствия официальным терминам.
- **Безопасность:** Автоматически создаёт **резервную копию** журнала перед применением изменений.

## 📦 Установка

### Зависимости

Для работы модуля **обязательно** требуется установленный модуль русского перевода PF2e:
- **pf2e-ru** — модуль русского перевода системы Pathfinder 2e ([GitLab](https://gitlab.com/gnuraco/pf2r))

### Установка модуля

1. Откройте Foundry VTT.
2. Перейдите на вкладку **Add-on Modules**.
3. Нажмите **Install Module**.
4. Вставьте **Manifest URL** в поле:
    ```text
    https://github.com/Toutsu/pf2e-ru-ai-translator/releases/latest/download/module.json
    ```
5. Нажмите **Install**.

## 📖 Как использовать

### Рабочий процесс A: Перевод (Зелёная галочка ✅)

1. **Выберите страницы**: Отметьте страницы для перевода.
2. **Сгенерируйте промпт**: Нажмите **«Начать перевод»**.
3. **Обработка ИИ**: Вставьте в ChatGPT/Claude → Скопируйте ответ (JSON).
4. **Обновление**: Вставьте в Foundry → **«Обновить журнал»**.
5. **Цикл**: Модуль автоматически проверяет оставшиеся страницы и открывает следующее окно с предвыбранными страницами.

### Рабочий процесс B: Проверка грамматики (Синяя галочка 🧙‍♂️)

1. **Выберите страницы**: Отметьте страницы для проверки грамматики.
2. **Сгенерируйте промпт**: Нажмите **«Проверка грамматики»**.
3. **Обработка ИИ**: Вставьте в ChatGPT/Claude → Скопируйте ответ (JSON).
4. **Обновление**: Вставьте в Foundry → **«Обновить журнал»**.
5. **Разрешение конфликтов**: Если ИИ пытается изменить защищённые термины, появится диалог предупреждения. Вы решаете: сохранить оригинал или принять изменение.

### 🐛 Известные особенности

> ### 💾 Резервные копии
>
> Поскольку модуль создаёт резервную копию перед каждой операцией, при многоэтапных процессах может появиться несколько резервных копий.
>
> - **Пример:** Вы переводите _«Chapter 1»_.
>   1. Модуль создаёт `Chapter 1 (Backup)`.
>   2. Журнал переводится и переименовывается в `Глава 1 / Chapter 1`.
>   3. Если запустить **проверку грамматики**, модуль создаст новую резервную копию.

Поскольку модуль работает как «посредник» между Foundry и внешним ИИ, большинство «багов» — это особенности поведения ИИ:

- **Болтливый ИИ (Сломанный JSON):** Иногда ИИ игнорирует инструкцию «только JSON» и добавляет пояснения. **Умная вставка** обычно исправляет это, но иногда нужно вручную удалить лишний текст.
- **Лимит токенов:** Бесплатные версии ChatGPT/Claude имеют ограничения на вывод. Если переводить огромный журнал целиком, текст оборвётся. **Решение:** Переводите партиями по 5-10 страниц.
- **HTML-ошибки:** Редко ИИ забывает закрыть HTML-тег, что приводит к визуальным глюкам.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**Automated Translation of Foundry VTT Journals with AI**

This module helps you translate **large adventure modules** or long texts in Foundry VTT quickly and consistently. It is optimized for **PF2e** but works system-independently.

## 🚀 Key Features

- **No API Costs:** Works with the free web versions of Gemini, ChatGPT, & Co.
- **Batch Translation:** Translate multiple pages at once.
- **Glossary Support:** Automatically generates a glossary of names and terms to ensure consistent translation across pages.
- **Smart Paste:** Automatically finds and extracts the JSON code block from the AI response.
- **Official Translation Integration:** Checks the installed Russian Pathfinder 2e system module for existing translations to ensure consistency with official terms.
- **Safety First:** Automatically creates a **Backup** (Copy) of your Journal before applying changes.

## 📦 Installation

### Dependencies

This module **requires** the Russian PF2e translation module:
- **pf2e-ru** — Russian translation module for Pathfinder 2e system ([GitLab](https://gitlab.com/gnuraco/pf2r))

### Module Installation

1. Open Foundry VTT.
2. Go to the **Add-on Modules** tab.
3. Click **Install Module**.
4. Paste the following **Manifest URL** into the field:
    ```text
    https://github.com/Toutsu/pf2e-ru-ai-translator/releases/latest/download/module.json
    ```
5. Click **Install**.

## 📖 How to Use

### Workflow A: Translation (Green Check ✅)

1. **Select Pages**: Choose the pages you want to translate.
2. **Generate Prompt**: Click **"Start Translation"**.
3. **AI Processing**: Paste into ChatGPT/Claude -> Copy Response (JSON).
4. **Update**: Paste into Foundry -> **"Update Journal"**.
5. **Loop**: The module automatically checks for remaining pages and opens the next window **pre-selected** for translation.

### Workflow B: Grammar Check (Blue Spell Check 🧙‍♂️)

1. **Select Pages**: Choose pages (even if already translated) to check grammar.
2. **Generate Prompt**: Click **"Grammar Check"**.
3. **AI Processing**: Paste into ChatGPT/Claude -> Copy Response (JSON).
4. **Update**: Paste into Foundry -> **"Update Journal"**.
5. **Conflict Resolution**: If the AI tries to change protected terms, a warning dialog appears. You decide: Keep Original or Accept Change?

<br>

---

# ⚖️ Credits & Licenses

## Original Module

This module is based on [Phil's PF2e AI Translator](https://github.com/PhilsModules/phils-pf2e-ai-translator) by Phil.

## Pathfinder Russian Translation Data

This module utilizes data from the Russian Pathfinder 2e translation module.

## Module License

This module uses a dual license structure.

- **Code:** GNU GPLv3
- **Assets:** CC BY-NC-ND 4.0

See `LICENSE` file for details.

<br>

<div align="center">
    <p><i>Made with ❤️ for the Foundry VTT Community</i></p>
</div>
