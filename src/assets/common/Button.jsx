export const Button = ({ children, disabled, classes, ...props }) => {
  const buttonClasses = `rounded-md bg-light-cyan px-8 py-4 font-fraunces text-lg text-white transition-all ${
    disabled ? "cursor-not-allowed opacity-50" : " hover:brightness-150"
  } ${classes}`;
  return (
    <button {...props} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};
