import { SectionProps } from "@/pages/templates/fragments/section";

const data: SectionProps[] = [
    {
      title: "Application UI",
      desc: "Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications.",
      contents: [
        {
          title: "Forms",
          data: [
            {
              title: "Sign in",
              desc: "6",
              href: "/application-ui/forms/login",
            },
            {
              title: "Sign up",
              desc: "2",
              href: "/application-ui/forms/register",
            },
          ],
        },
        {
          title: "Navigations",
          data: [
            {
              title: "Navbar",
              desc: "2",
              href: "/application-ui/navigations/navbar",
            },
          ],
        },
      ],
    },
];

function get() {
    return data;
}

function count() {
    let result = 0;
    data.map((section) => {
        section.contents.map((content) => {
            content.data.map((item) => {
                result += parseInt(item.desc)
            })
        })
    })
    return result;
}

export const useTemplateStore = {
    get,
    count
}