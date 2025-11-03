'use client';

import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  title?: string;
  description?: string;
  items?: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

// Default dummy data
const defaultAccordionItems: AccordionItem[] = [
  {
    id: '1',
    title: 'What services do you offer?',
    content: 'We provide comprehensive business solutions including consulting, digital transformation, and strategic planning services to help your company grow and succeed in today\'s competitive market.'
  },
  {
    id: '2', 
    title: 'How long does a typical project take?',
    content: 'Project timelines vary depending on scope and complexity. Most consulting projects range from 3-6 months, while digital transformation initiatives typically take 6-12 months. We provide detailed timelines during our initial consultation.'
  },
  {
    id: '3',
    title: 'Do you work with small businesses?',
    content: 'Yes, we work with businesses of all sizes, from startups to large enterprises. Our flexible approach allows us to tailor our services to meet the specific needs and budget constraints of small businesses while delivering maximum value.'
  },
];

const Accordion: React.FC<AccordionProps> = ({
  title = "Frequently asked questions",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ",
  items = defaultAccordionItems,
  className = "",
  allowMultiple = false
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  const isItemOpen = (itemId: string) => openItems.includes(itemId);

  return (
    <section>
            <div className={`accordion ${className}`}>
      <div className="accordion__content">
        <div className="accordion__intro">
          <h2 className="accordion__title">{title}</h2>
          <p className="accordion__description">{description}</p>
        </div>
        
        <div className="accordion__items">
          {items.map((item, index) => (
            <div key={item.id} className="accordion__item">
              <button
                className={`accordion__trigger ${isItemOpen(item.id) ? 'accordion__trigger--open' : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isItemOpen(item.id)}
                aria-controls={`accordion-content-${item.id}`}
                type="button"
              >
                <span className="accordion__trigger-text">{item.title}</span>
                <span className="accordion__trigger-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`accordion__icon ${isItemOpen(item.id) ? 'accordion__icon--rotated' : ''}`}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              
              <div
                className={`accordion__content-wrapper ${isItemOpen(item.id) ? 'accordion__content-wrapper--open' : ''}`}
                id={`accordion-content-${item.id}`}
                aria-hidden={!isItemOpen(item.id)}
              >
                <div className="accordion__content-inner">
                  <p className="accordion__content-text">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

  );
};

export default Accordion;
