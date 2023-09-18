import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

export const featureBlockSchema: any = {
  label: "Feature",
  name: "feature",
  ui: {
    defaultItem: {
      label: "Virtual",
      headline: "Join us to shape a sustainable future",
      subhead: "August 16, 2023",
      body: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [
              {
                type: 'text',
                text: "Welcome to the inaugural virtual Sustainable Blockchain Summit, where technology meets sustainability in a groundbreaking digital experience! This pioneering event unites industry leaders, innovators, and sustainability enthusiasts to explore the power of blockchain in promoting a greener and more equitable world."
              },
            ],
          }
        ],
      },
      style: {
        alignment: "flex-col items-start gap-4",
        padding: "pt-64 pb-14 pr-10 pl-10 sm:pt-10 sm:pb-14 sm:pr-5 sm:pl-5",
        featureImage: "mr-auto",
        featureContent: "w-2/3 min-h-0 text-left sm:w-full sm:min-h-0 sm:text-left",
        buttonsLayout: "flex-wrap gap-4 sm:flex-col sm:gap-4 sm:w-60",
        labelStyles: "text-accent3 mg-copy-small mb-1",
        headlineStyles: "text-white mg-headline-large undefined",
        subheadStyles: "text-white mg-headline-small mb-20",
        textStyles: "text-white mg-copy-small mb-12",
      },
      background: {
        fillStyles: "opacity-100",
        position: "bg-center",
        ornaments: [
          {
            src: "/uploads/earth.webp",
            alignment: "center",
            width: "900",
            xOffset: "600",
            yOffset: "-50",
          }
        ]
      },
    },
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Image",
          name: "featureImage",
          type: "string",
          ui: {
            component: "featureImageControl",
          }
        },
        {
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        {
          label: "Buttons",
          name: "buttonsLayout",
          type: "string",
          ui: {
            component: "buttonsLayoutControl",
          },
        },
        ...typographySchema,
      ],
    },
    backgroundSchema,
    imageSchema,
    ...contentSchema,
    buttonsSchema,
    navigationLabelSchema,
  ],
};