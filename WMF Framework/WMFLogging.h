#ifndef WMFLogging_h
#define WMFLogging_h

#import <os/log.h>

#if DEBUG
#define DDLogVerbose(...) os_log_debug(OS_LOG_DEFAULT, __VA_ARGS__)
#define DDLogDebug(...) os_log_debug(OS_LOG_DEFAULT, __VA_ARGS__)
#define DDLogInfo(...) os_log_info(OS_LOG_DEFAULT, __VA_ARGS__)
#else
#define DDLogVerbose(...)
#define DDLogDebug(...)
#define DDLogInfo(...)
#endif

#define DDLogWarn(...) os_log_info(OS_LOG_DEFAULT, __VA_ARGS__)
#define DDLogError(...) os_log_error(OS_LOG_DEFAULT, __VA_ARGS__)

#endif /* WMFLogging_h */
