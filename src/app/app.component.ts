import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'dpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any = '';
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const requestOptions = {
      headers: new HttpHeaders({
        accessToken: 'eyJjdHkiOiJhcHBsaWNhdGlvblwvSlNPTiIsImFsZyI6IlJTMjU2In0.eyJ0b2tlbiI6Im01a09RenJXSXNiRVZzVnNJVExkdUwrOGhnNnVSNTJnZUJMVU1ZNGdPclFCSXJtbkVsazlVWkZsNVNlVHMwa2RaakV5UERCLzVPcVNtUXAvZEZqQVhQNVBtZWVhWUtHazFmWVdzcnZkeHVZUTRwOXVmVlNzVjJrOWphc0xQaE93OU5qUTdRT1V2RW0wb1pVZGx4ellRQ0dEWWhQeWNtRzJ2N1ExK1NleVBsVlc4MGpCQmdtMlM3cEdHaXRxZjlLOWY2YmJ6UitpM2hmQjFSSFp3TmY2RExzQTBjeGUzRzlNWVBqOUQvNWJrZUgxalRsNG5vRHBxaHM3OXNsYzRadTRoWTc3dUJtb3pvSy9ENXZNb2JBeVNZNkw5ZjUwRTVjL01CeFQyVVdxOUxxUXhiYnpXaHBmZG1ha04xcU4vSEhEcTllU3B3YmtmOWlyWTY5WHpnSXlwZUNVeTZOMGV6dHlKK2tsellpZ3BnY3hwL05pYXhtZEkra1MxV3dxR1N4VUZ4S3VmOUNsb0tkSFR6V1lLMm5ybmc9PSIsICJpdiI6IkFNWE5IdTA4ZlRuSkRwTWs1NStrUkE9PSIsICJleHBpcmF0aW9uVGltZSI6IjE2NzcwOTEyMTIwMzkifQ.AmtLa-TOnu7_asodmM8DzjcHOYF3Xh5PHo90_SDorjpFpdlXahWbiAgPjqo_uZvrdCmvHBhgjh6_aq_dfWA-oqA6FlTVzcGtkrImu0JiuLBXPN6jHNt6Yc3EANfjlbRHsyKUgE6DT5f7fKYlUCH0cDP8bsTVFu6_IH8vmJNyZOtXJhGAMHBmv4xRMxQmA9-6p-cgqLRAJU45OITWP600bY-KhKGKUKuYOdb6iVtAAWOn5scUAYhm5P1x5R9KKQ0cfGOnl0ioXsGTDbv8ds_jnp9K5OccWU4gyIKen8C_A5qgqufzNoCR-WIoucxB4CnWhXI7tnelJqDftHVTr8UWLg'
      }
      ),
    };

    let payload = { "callback": "JSON_CALLBACK", "noOfResults": 10, "counselor": true, "writeBackOverview": true, "militaryBilling": false, "studentNumber": "20044424" }
    debugger;
    this.http.post("http://sisqa.gcu.edu/degreeaudit/v1/daaggregator/searchStudent", payload, requestOptions)
      .subscribe({
        next: (res) => {
          // debugger;
        },
        error: (err) => {
          // debugger;
        }
      });
    this.title = localStorage.getItem('token');
  }
}
