import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {PlayersService} from '../../services/players.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private playerService: PlayersService) {
  }

  ngOnInit() {
    this.playerForm = this.fb.group({
      firstName: '',
      lastName: '',
      points: null,
      nbGamesPlayed: null,
      nbFirstPlace: null,
      nbSecondPlace: null,
      nbThirdPlace: null,
      topPlayer: false
    });
  }

  createNewPlayer(formDirective: FormGroupDirective) {
    if (this.playerForm.valid) {
      this.playerService.createPlayer(this.playerForm.value).subscribe(() => {
        formDirective.resetForm();
        this.playerForm.reset();
      }, error => console.log(error));
      console.log(this.playerForm.value);
    }
  }

}
