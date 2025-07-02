import type { ForMonitoring } from "../../ports/drivens";

export class LoggerStubAdapter implements ForMonitoring {
  log(event: string, message: string): void {
    console.log(`[${new Date().toISOString()}] ${event}: ${message}`);
  }
}
