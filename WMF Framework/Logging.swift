import Foundation
import os.log

public extension Error {
    public var loggingDescription: String {
        return String(describing: self)
    }
}

public extension OSLog {
    public struct Subsystem {
        static let bundle: String = Bundle.main.bundleIdentifier ?? "com.example"
    }
    
    public struct Category {
        static let general: String = "general"
    }
    
    static let general = OSLog(subsystem: Subsystem.bundle, category: Category.general)
}

public func DDLogVerbose(_ message: StaticString, _ args: CVarArg...) {
    #if DEBUG
    os_log(message, log: OSLog.general, type: .debug, args)
    #endif
}

public func DDLogDebug(_ message: StaticString, _ args: CVarArg...) {
    #if DEBUG
    os_log(message, log: OSLog.general, type: .debug, args)
    #endif
}

public func DDLogInfo(_ message: StaticString, _ args: CVarArg...) {
    #if DEBUG
    os_log(message, log: OSLog.general, type: .info, args)
    #endif
}

public func DDLogWarning(_ message: StaticString, _ args: CVarArg...) {
    os_log(message, log: OSLog.general, type: .info, args)
}

public func DDLogError(_ message: StaticString, _ args: CVarArg...) {
    os_log(message, log: OSLog.general, type: .error, args)
}
