export default function getEnvVar(varName: string) {
  const varVal = process.env[varName];
  if (!varVal) throw new Error(`${varName} env variable is not defined`);
  return varVal;
}
