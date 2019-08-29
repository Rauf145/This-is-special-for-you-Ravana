export class Position {
  public static KEY_ORIGINAL: string = "raw";
  public static KEY_INDEX: string = "index";
  public static KEY_HDOP: string = "hdop";
  public static KEY_VDOP: string = "vdop";
  public static KEY_PDOP: string = "pdop";
  public static KEY_SATELLITES: string = "sat"; // in use
  public static KEY_SATELLITES_VISIBLE: string = "satVisible";
  public static KEY_RSSI: string = "rssi";
  public static KEY_GPS: string = "gps";
  public static KEY_ROAMING: string = "roaming";
  public static KEY_EVENT: string = "event";
  public static KEY_ALARM: string = "alarm";
  public static KEY_STATUS: string = "status";
  public static KEY_ODOMETER: string = "odometer"; // meters
  public static KEY_ODOMETER_SERVICE: string = "serviceOdometer"; // meters
  public static KEY_ODOMETER_TRIP: string = "tripOdometer"; // meters
  public static KEY_HOURS: string = "hours";
  public static KEY_STEPS: string = "steps";
  public static KEY_HEART_RATE: string = "heartRate";
  public static KEY_INPUT: string = "input";
  public static KEY_OUTPUT: string = "output";
  public static KEY_IMAGE: string = "image";
  public static KEY_VIDEO: string = "video";
  public static KEY_AUDIO: string = "audio";

  // The units for the below four KEYs currently vary.
  // The preferred units of measure are specified in the comment for each.
  public static KEY_POWER: string = "power"; // volts
  public static KEY_BATTERY: string = "battery"; // volts
  public static KEY_BATTERY_LEVEL: string = "batteryLevel"; // percentage
  public static KEY_FUEL_LEVEL: string = "fuel"; // liters
  public static KEY_FUEL_USED: string = "fuelUsed"; // liters
  public static KEY_FUEL_CONSUMPTION: string = "fuelConsumption"; // liters/hour

  public static KEY_VERSION_FW: string = "versionFw";
  public static KEY_VERSION_HW: string = "versionHw";
  public static KEY_TYPE: string = "type";
  public static KEY_IGNITION: string = "ignition";
  public static KEY_FLAGS: string = "flags";
  public static KEY_ANTENNA: string = "antenna";
  public static KEY_CHARGE: string = "charge";
  public static KEY_IP: string = "ip";
  public static KEY_ARCHIVE: string = "archive";
  public static KEY_DISTANCE: string = "distance"; // meters
  public static KEY_TOTAL_DISTANCE: string = "totalDistance"; // meters
  public static KEY_RPM: string = "rpm";
  public static KEY_VIN: string = "vin";
  public static KEY_APPROXIMATE: string = "approximate";
  public static KEY_THROTTLE: string = "throttle";
  public static KEY_MOTION: string = "motion";
  public static KEY_ARMED: string = "armed";
  public static KEY_GEOFENCE: string = "geofence";
  public static KEY_ACCELERATION: string = "acceleration";
  public static KEY_DEVICE_TEMP: string = "deviceTemp"; // celsius
  public static KEY_COOLANT_TEMP: string = "coolantTemp"; // celsius
  public static KEY_ENGINE_LOAD: string = "engineLoad";
  public static KEY_OPERATOR: string = "operator";
  public static KEY_COMMAND: string = "command";
  public static KEY_BLOCKED: string = "blocked";
  public static KEY_DOOR: string = "door";
  public static KEY_AXLE_WEIGHT: string = "axleWeight";

  public static KEY_DTCS: string = "dtcs";
  public static KEY_OBD_SPEED: string = "obdSpeed"; // knots
  public static KEY_OBD_ODOMETER: string = "obdOdometer"; // meters

  public static KEY_RESULT: string = "result";

  public static KEY_DRIVER_UNIQUE_ID: string = "driverUniqueId";

  // Start with 1 not 0
  public static PREFIX_TEMP: string = "temp";
  public static PREFIX_ADC: string = "adc";
  public static PREFIX_IO: string = "io";
  public static PREFIX_COUNT: string = "count";
  public static PREFIX_IN: string = "in";
  public static PREFIX_OUT: string = "out";

  public static ALARM_GENERAL: string = "general";
  public static ALARM_SOS: string = "sos";
  public static ALARM_VIBRATION: string = "vibration";
  public static ALARM_MOVEMENT: string = "movement";
  public static ALARM_LOW_SPEED: string = "lowspeed";
  public static ALARM_OVERSPEED: string = "overspeed";
  public static ALARM_FALL_DOWN: string = "fallDown";
  public static ALARM_LOW_POWER: string = "lowPower";
  public static ALARM_LOW_BATTERY: string = "lowBattery";
  public static ALARM_FAULT: string = "fault";
  public static ALARM_POWER_OFF: string = "powerOff";
  public static ALARM_POWER_ON: string = "powerOn";
  public static ALARM_DOOR: string = "door";
  public static ALARM_LOCK: string = "lock";
  public static ALARM_UNLOCK: string = "unlock";
  public static ALARM_GEOFENCE: string = "geofence";
  public static ALARM_GEOFENCE_ENTER: string = "geofenceEnter";
  public static ALARM_GEOFENCE_EXIT: string = "geofenceExit";
  public static ALARM_GPS_ANTENNA_CUT: string = "gpsAntennaCut";
  public static ALARM_ACCIDENT: string = "accident";
  public static ALARM_TOW: string = "tow";
  public static ALARM_IDLE: string = "idle";
  public static ALARM_HIGH_RPM: string = "highRpm";
  public static ALARM_ACCELERATION: string = "hardAcceleration";
  public static ALARM_BRAKING: string = "hardBraking";
  public static ALARM_CORNERING: string = "hardCornering";
  public static ALARM_LANE_CHANGE: string = "laneChange";
  public static ALARM_FATIGUE_DRIVING: string = "fatigueDriving";
  public static ALARM_POWER_CUT: string = "powerCut";
  public static ALARM_POWER_RESTORED: string = "powerRestored";
  public static ALARM_JAMMING: string = "jamming";
  public static ALARM_TEMPERATURE: string = "temperature";
  public static ALARM_PARKING: string = "parking";
  public static ALARM_SHOCK: string = "shock";
  public static ALARM_BONNET: string = "bonnet";
  public static ALARM_FOOT_BRAKE: string = "footBrake";
  public static ALARM_FUEL_LEAK: string = "fuelLeak";
  public static ALARM_TAMPERING: string = "tampering";
  public static ALARM_REMOVING: string = "removing";

  constructor() {
  }

  // public Position(String protocol) {
  //     this.protocol = protocol;
  //     this.serverTime = new Date();
  // }

  private protocol: string;

  public getProtocol(): string {
    return this.protocol;
  }

  public setProtocol(protocol: string) {
    this.protocol = protocol;
  }

  private serverTime: Date = new Date();

  public getServerTime(): Date {
    return this.serverTime;
  }

  public setServerTime(serverTime: Date) {
    this.serverTime = serverTime;
  }

  private deviceTime: Date;

  public getDeviceTime(): Date {
    return this.deviceTime;
  }

  public setDeviceTime(deviceTime: Date) {
    this.deviceTime = deviceTime;
  }

  private fixTime: Date;

  public getFixTime(): Date {
    return this.fixTime;
  }

  public setFixTime(fixTime: Date) {
    this.fixTime = fixTime;
  }

  public setTime(time: Date) {
    this.setDeviceTime(time);
    this.setFixTime(time);
  }

  private outdated: boolean;

  //    @QueryIgnore
  public getOutdated(): boolean {
    return this.outdated;
  }

  public setOutdated(outdated: boolean) {
    this.outdated = outdated;
  }

  private valid: boolean;

  public getValid(): boolean {
    return this.valid;
  }

  public setValid(valid: boolean) {
    this.valid = valid;
  }

  public latitude: number;

  public getLatitude(): number {
    return this.latitude;
  }

  public setLatitude(latitude: number) {
    this.latitude = latitude;
  }

  public longitude: number;

  public getLongitude(): number {
    return this.longitude;
  }

  public setLongitude(longitude: number) {
    this.longitude = longitude;
  }

  private altitude: number; // value in meters

  public getAltitude(): number {
    return this.altitude;
  }

  public setAltitude(altitude: number) {
    this.altitude = altitude;
  }

  private speed: number; // value in knots

  public getSpeed(): number {
    return this.speed;
  }

  public setSpeed(speed: number) {
    this.speed = speed;
  }

  private course: number;

  public getCourse(): number {
    return this.course;
  }

  public setCourse(course: number) {
    this.course = course;
  }

  private address: string;

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  private accuracy: number;

  public getAccuracy(): number {
    return this.accuracy;
  }

  public setAccuracy(accuracy: number) {
    this.accuracy = accuracy;
  }

  //    @Override
  //    public String toString(){
  ////        "protocol, deviceid, servertime, devicetime, fixtime, valid, latitude, longitude, altitude)
  //        return String.format("'%s',%s,'%s','%s','%s',%s,%s,%s,%s", getProtocol(), getDeviceId(), getServerTime(), getDeviceTime(),
  //                             getFixTime(), getValid(), getLatitude(), getLongitude(), getAltitude());
  //    }

  //    private Network network;

  //    public Network getNetwork() {
  //        return network;
  //    }

  //    public void setNetwork(Network network) {
  //        this.network = network;
  //    }

  //    public String getType() {
  //        return super.getType();
  //    }


}
