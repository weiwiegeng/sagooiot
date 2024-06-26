// =================================================================================
// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.
// =================================================================================

package dao

import (
	"sagooiot/internal/dao/internal"
)

// internalNoticeConfigDao is internal type for wrapping internal DAO implements.
type internalNoticeConfigDao = *internal.NoticeConfigDao

// noticeConfigDao is the data access object for table notice_config.
// You can define custom methods on it to extend its functionality as you wish.
type noticeConfigDao struct {
	internalNoticeConfigDao
}

var (
	// NoticeConfig is globally public accessible object for table notice_config operations.
	NoticeConfig = noticeConfigDao{
		internal.NewNoticeConfigDao(),
	}
)

// Fill with you ideas below.
