interface OTS {
    location_id: number;
    period_start: string; // ISO 8601 format date-time
    period_start_date: string; // YYYY-MM-DD
    period_start_time: string; // HH:MM:SS
    ots_count: number;
    watcher_count: number;
}

interface OTSSummaryDay {
    ots_count_sum: number;
    ots_count_avg: number;
    watcher_count_avg: number;
    watcher_count_total: number;
    ots_count: number;
    ots: OTS[];
}
