/**
 * The PowerButton class is our Facade
 */
class PowerButton {
  private computerIsRunning: boolean = false;

  constructor(private cpu: CPU = new CPU(), private memory: Memory = new Memory(), private hardDrive: HardDrive = new HardDrive()) {}

  private startComputer() {
    const cpuReady = this.cpu.start();
    const memoryReady = this.memory.start();
    const hardDriveReady = this.hardDrive.start();
    return [cpuReady, memoryReady, hardDriveReady];
  }

  private stopComputer() {
    const cpuStopped = this.cpu.stop();
    const memoryStopped = this.memory.stop();
    const hardDriveStopped = this.hardDrive.stop();
    return [cpuStopped, memoryStopped, hardDriveStopped];
  }

  /**
   * The public `press` method takes care of the internal logic.
   * When the computer is already running, all subsystems will be stopped.
   * When the computer is not running, all subsystems will be started.
   * The client does not need to know anything abot this, he/she only needs to press a button.
   */
  public press(): string[] {
    if (this.computerIsRunning) {
      console.log(this.stopComputer());
      this.computerIsRunning = false;
      return this.stopComputer();
    }
    if (!this.computerIsRunning) {
      console.log(this.startComputer());
      this.computerIsRunning = true;
      return this.startComputer();
    }

    return [];
  }
}

/**
 * The CPU class is one of our subsystems
 */
class CPU {
  public start(): string {
    const state = "CPU Encendida";
    return state;
  }
  public stop(): string {
    const state = "CPU Apagada";
    return state;
  }
}

/**
 * The Memory class is one of our subsystems
 */
class Memory {
  public start(): string {
    const state = "Memorias Encendidas";
    return state;
  }
  public stop(): string {
    const state = "Memorias Apagadas";
    return state;
  }
}

/**
 * The HardDrive class is one of our subsystems
 */
class HardDrive {
  public start(): string {
    const state = "Disco duro Encendido";
    return state;
  }
  public stop(): string {
    const state = "Disco duro Apagado";
    return state;
  }
}

export default PowerButton;
