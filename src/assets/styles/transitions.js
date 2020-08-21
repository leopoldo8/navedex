export const FadeInFromTop = (triggerAnimation) => `
  transition: transform .6s cubic-bezier(0.16, 1, 0.3, 1), opacity .7s;
  transform: translateY(-10%);
  opacity: 0;

  ${triggerAnimation && `
    transform: translateY(0);
    opacity: 1;
  `}
`;
