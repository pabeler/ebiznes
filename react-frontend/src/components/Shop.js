import './Shop.css'

export default function Shop(){

    return (
        <div>
            <div class="row w-100">
                <div class="col-2 settings-block mx-4" >
                    <div class="">
                        <p class="font-filter-block ml-custom">Filtruj według</p>
                    </div>
                    <form action="/action_page.php">
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something"/>
                        <label class="form-check-label" for="check1">Drama</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Komedia</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check3" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Nauka</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check4" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Biznes</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check5" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Ekonomia</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check6" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Poezja</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check7" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Fantazy</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check8" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Science Fiction</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check9" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Lektury</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check10" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Dla dzieci</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check11" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Rozwojowe</label>
                        </div>
                        <div class="">
                            <p class="font-filter-block ml-custom">Bestsellery</p>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check12" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Bestsellery tego roku</label>
                        </div>
                        <div class="">
                            <p class="font-filter-block ml-custom">Nowość</p>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check13" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Tak</label>
                        </div>
                        <label for="customRange" class="form-label">Cena</label>
                        <input id="multi6" class="multi-range" type="range" />
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </form>

                    </div>
                    <div class="col-9 settings-block">

                    </div>
                    </div>
                    
            </div>
    );

}