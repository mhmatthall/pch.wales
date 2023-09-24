# [Person-Centred Cancer Care for Wales](https://pch.wales/)

[![ci/cd](https://github.com/mhmatthall/pch.wales/actions/workflows/main.yml/badge.svg)](https://github.com/mhmatthall/pch.wales/actions/workflows/main.yml)


## About
Hey! I'm Matt and my PhD is all about empowering those with cancer in Wales by co-creating person-centred digital interventions. I've created this project website to support and promote my PhD work, and further to promote and advocate for person-centred healthcare in Wales and beyond.

**[View the site live: pch.wales!](https://pch.wales/)**

## Technical details
The site is built with Next.js, using modular Sass for styling and eslint for linting. It's hosted on a Node server in the UK, with CI/CD via Github Actions making it nice and easy to update, too!

You're welcome to clone and re-use the site, but because it's a personal project it has some weird requirements. Namely, Node needs to be passed some secrets that are only really relevant for my requirements:

| Key                      | Description              |
| ------------------------ | ------------------------ |
| `NOTION_API_KEY`         | Notion API [integration key](https://notion.so/my-integrations)    |
| `NOTION_DATABASE_ID_S02` | Notion object ID for sending study S02 form responses to Notion DB |

## Thanks
Thanks to all my friends and peers at Swansea University and Velindre University NHS Trust.

This work was supported by the Engineering & Physical Sciences Research Council [EP/S021892/1].

## Links
- Find the live site at [`pch.wales`](https://pch.wales/)
- Links to my socials are on [my website](https://matthall.io/)
- Check out the [EPIC CDT at Swansea University](https://people-first.best/)
- Learn more about [Velindre here](https://velindre.nhs.wales/)